import React, { useMemo } from 'react';
import { getBrews } from '../../api/brew';
import { BaseBrewingApi } from '../../types/BrewingType';
import BrewListGroup from './BrewListGroup';

interface BrewListTypeProps {
  onSelectBrewId: (brewId: number) => void;
}

type MergedBrews = {
  [key: string]: BaseBrewingApi[];
};

const BrewList: React.FC<BrewListTypeProps> = ({ onSelectBrewId }) => {
  const [selectedBrewId, setSelectedBrewId] = React.useState<number | null>(
    null
  );

  const [brews, setBrews] = React.useState<BaseBrewingApi[]>([]);

  React.useEffect(() => {
    const f = async (): Promise<void> => {
      const brewsApi = await getBrews();

      setBrews(brewsApi);
      setSelectedBrewId(brewsApi[0].id ?? null);
      onSelectBrewId(brewsApi[0].id ?? null);
    };
    f();
  }, [onSelectBrewId]);

  // take days as the keys
  const mergedBrews: MergedBrews = useMemo(
    () =>
      brews.reduce((brewsDate, brew) => {
        const date = new Date(brew.startedAt).toLocaleDateString();

        brewsDate[date] = brewsDate[date] || [];
        brewsDate[date].push(brew);
        return brewsDate;
      }, Object.create(null)),
    [brews]
  );

  const handleSelectBrewId = (brewId: number): void => {
    setSelectedBrewId(brewId);
    onSelectBrewId(brewId);
  };

  return (
    <ul className="flex flex-col">
      {Object.keys(mergedBrews)
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
        .map((date) => (
          <BrewListGroup
            key={date}
            brews={mergedBrews[date]}
            onSelectBrewId={handleSelectBrewId}
            currentBrewId={selectedBrewId}
            date={date}
          />
        ))}
    </ul>
  );
};

export default BrewList;
