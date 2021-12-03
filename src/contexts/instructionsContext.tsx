import React from 'react';

import { getSupportedFunctions } from '../api/functions';
import FunctionTemplate from '../types/FunctionData/FunctionTemplate';

interface Props {
  enabled: boolean;
}

export const InstructionsContext = React.createContext<State | null>(null);

interface State {
  data: FunctionTemplate[];
  refresh: () => Promise<void>;
}

const InstructionsContextProvider: React.FC<Props> = ({
  children,
  enabled,
}) => {
  const [value, setValue] = React.useState<State | null>(null);

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

export default InstructionsContextProvider;
