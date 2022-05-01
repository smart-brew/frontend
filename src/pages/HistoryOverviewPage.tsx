import React from 'react';
import { Route } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { getBrew } from '../api/brew';
import Menu, { MENU_HEIGHT } from '../components/menu/MenuContainer';
import RecipePreview from '../components/recipe/RecipePreview';
import { BrewingApi } from '../types/BrewingType';
import { HistoryOverviewStatsPage } from './HistoryOverviewStatsPage';
import BrewHistoryHeading from '../components/brew/BrewHistoryHeading';
import BrewHistoryInstructionList from '../components/brew/BrewInstructionHistoryList';

const menus = [
  { link: '/history', title: 'Recipe' },
  { link: '/history/stats', title: 'Stats' },
];

type Props = {
  brewId: number | null;
};

export const HistoryOverview: React.FC<Props> = ({ brewId }) => {
  // currently selected recipe
  const [selectedBrew, setSelectedBrew] = React.useState<BrewingApi | null>(
    null
  );

  // if new selected brew (by ID) -> fetch the entire brew with details
  React.useEffect(() => {
    const f = async (): Promise<void> => {
      if (brewId) setSelectedBrew(await getBrew(brewId));
    };
    f();
  }, [brewId]);

  const printRef = React.useRef(null);

  const handleDownloadPdf = async (): Promise<void> => {
    const element = printRef.current;
    const canvas = await html2canvas(element!);
    const data = canvas.toDataURL('image/png');

    /* eslint new-cap: ["error", { "newIsCap": false }] */
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('recipe_history.pdf');
  };

  return (
    <div className="h-full">
      <Menu menus={menus} matchPathnameExact />

      <div
        className="h-full overflow-auto pb-2"
        style={{ maxHeight: `calc(100vh - ${MENU_HEIGHT * 2}px)` }}
      >
        <Route path="/history" exact>
          <BrewHistoryHeading brew={selectedBrew} />
          <RecipePreview recipe={selectedBrew?.recipe ?? null} />
        </Route>
        <Route path="/history/stats" exact>
          <div ref={printRef}>
            <BrewHistoryHeading brew={selectedBrew} />
            {selectedBrew && <BrewHistoryInstructionList brew={selectedBrew} />}
            <HistoryOverviewStatsPage selectedBrew={selectedBrew} />
          </div>
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="chamber p-2 mx-7 my-1 content-center shadow rounded-3xl items-center justify-start"
            style={{
              background: 'rgba(254, 208, 8, 0.1)',
            }}
          >
            <div className="pl-2 font-bold">Download as PDF</div>
          </button>
        </Route>
      </div>
    </div>
  );
};
