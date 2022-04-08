import React from 'react';
import { getRecipes } from '../../api/recipe';
import { BrewSimple } from '../../types/RecipeData/BrewType';
import { RecipeSimple } from '../../types/RecipeData/RecipeType';
import BrewDayInList from './BrewDayInList';

interface BrewListTypeProps {
  brews: BrewSimple[];
  callback: (arg: number) => void;
  current: number;
}

// recipes={brews} callback={setBrewId} current={brewId} /
const BrewList: React.FC<BrewListTypeProps> = ({
  brews,
  callback,
  current,
}) => {
  const [recipes, setRecipes] = React.useState<RecipeSimple[]>([]);

  React.useEffect(() => {
    const f = async (): Promise<void> => {
      setRecipes(await getRecipes());
    };
    f();
  }, []);

  //   take days as the keys
  const daysOfBrewing = brews.reduce((r, a) => {
    r[new Date(a.createdAt).toLocaleDateString()] =
      r[new Date(a.createdAt).toLocaleDateString()] || [];
    r[new Date(a.createdAt).toLocaleDateString()].push(a);
    return r;
  }, Object.create(null));

  //   show list for each day
  function renderBrewsForTheDay(): React.ReactNode {
    const dayNames = Object.keys(daysOfBrewing);
    if (dayNames.length > 0) {
      return dayNames
        .slice(0)
        .reverse()
        .map((dayOfBrewing) => (
          <BrewDayInList
            brewsForTheDay={daysOfBrewing[dayOfBrewing]}
            callback={callback}
            current={current}
            dayName={dayOfBrewing}
            recipes={recipes}
          />
        ));
    }
    return null;
  }

  return (
    <ul className="flex flex-col">
      {renderBrewsForTheDay()}
      <div />
    </ul>
  );
};

export default BrewList;
