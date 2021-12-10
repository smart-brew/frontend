import InstructionState from '../types/InstructionState';

export default class InstructionStateMap {
  private states = [
    { codeName: 'WAITING', name: 'WAITING', style: 'text-gray-500' },
    { codeName: 'IN_PROGRESS', name: 'IN PROGRESS', style: 'text-blue-500' },
    { codeName: 'DONE', name: 'DONE', style: 'text-green-500' },
    { codeName: 'ERROR', name: 'ERROR', style: 'text-red-500' },
  ];

  getStyle(state: string): InstructionState | null {
    // this.states.forEach((possibleState) => {
    //   if (possibleState.codeName === state) {
    //     return possibleState;
    //   }
    // });

    const style = this.states.find((possibleState) => {
      return possibleState.codeName === state;
    });

    if (style !== undefined) {
      return style;
    }
    return null;
  }
}
