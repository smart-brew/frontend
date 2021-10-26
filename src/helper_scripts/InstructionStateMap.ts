import InstructionState from "../types/InstructionState";

export default class InstructionStateMap {
    private states = [
        {name: "waiting",
        style: "text-gray-500"},
        {name: "in progress",
        style: "text-blue-500"},
        {name: "finished",
        style: "text-green-500"},
        {name: "failed",
        style: "text-red-500"}];


    getStyle(state: string | null) : InstructionState | null {
        if (state) {

            let instrState : InstructionState = {
                name: state,
                style: null
            };
            for (let possibleState of this.states) {
                if (possibleState.name === instrState.name.toLowerCase()) {
                    instrState.style = possibleState.style;
                    break;
                }
            }
            return instrState;
        }

        return null;
    }




}
