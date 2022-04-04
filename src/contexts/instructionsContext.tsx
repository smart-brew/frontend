import React from 'react';

import { getSupportedFunctions } from '../api/functions';
import InstructionTemplate from '../types/FunctionData/InstructionTemplate';

interface State {
  data: InstructionTemplate[];
  refresh: () => Promise<void>;
}

const InstructionsContext = React.createContext<State>({
  data: [],
  refresh: () => Promise.resolve(),
});
interface Props {
  enabled: boolean;
}

const InstructionsContextProvider: React.FC<Props> = ({
  children,
  enabled,
}) => {
  const [value, setValue] = React.useState<State>({
    data: [],
    refresh: () => Promise.resolve(),
  });

  if (!enabled) console.log('Instruction fetching is disabled (see App.tsx)');

  const refresh = React.useCallback(async (): Promise<void> => {
    setValue({
      data: await getSupportedFunctions(),
      refresh,
    });
  }, []);

  React.useEffect(() => {
    refresh();
  }, [enabled, refresh]);

  // TODO delete
  React.useEffect(() => console.log('Got new instructions:', value), [value]);

  return (
    <InstructionsContext.Provider value={value}>
      {children}
    </InstructionsContext.Provider>
  );
};

export const useInstructionsContext = (): State =>
  React.useContext(InstructionsContext);

export default InstructionsContextProvider;
