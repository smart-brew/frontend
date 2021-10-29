import InstructionState from '../types/InstructionState';

export default class InstructionStateMap {
  private states = [
    { name: 'waiting', style: 'text-gray-500', inProgress: false },
    { name: 'in progress', style: 'text-blue-500', inProgress: true },
    { name: 'finished', style: 'text-green-500', inProgress: false },
    { name: 'failed', style: 'text-red-500', inProgress: false },
  ];

  getStyle(state: string | null): InstructionState | null {
    if (state) {
      const instrState: InstructionState = {
        name: state,
        style: null,
        inProgress: false,
      };
      // eslint-disable-next-line no-restricted-syntax
      for (const possibleState of this.states) {
        if (possibleState.name === instrState.name.toLowerCase()) {
          instrState.style = possibleState.style;
          if (possibleState.inProgress) {
            instrState.inProgress = true;
          }
          break;
        }
      }
      return instrState;
    }

    return null;
  }
}
