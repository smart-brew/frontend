import React from 'react';
import InstrType from '../../types/InstrType';
import InstructionStateMap from "../../helper_scripts/InstructionStateMap";
import TimeHelper from "../../helper_scripts/TimeHelper";
import FullInstruction from "./FullInstruction";
import HiddenInstruction from "./HiddenInstruction";





function Instruction(instr: InstrType) {

    const instrStyle = (new InstructionStateMap()).getStyle(TimeHelper.getState(instr.start, instr.end));

    if(instrStyle?.inProgress) {
        return <FullInstruction instruction={instr} state={instrStyle} />;
    } else {
        return <HiddenInstruction instruction={instr} state={instrStyle} />;
    }
}

export default Instruction;
