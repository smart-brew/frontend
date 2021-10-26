import React from 'react';
import InstrType from '../../types/InstrType';
import UnitsMap from "../../helper_scripts/UnitsMap";
import InstructionStateMap from "../../helper_scripts/InstructionStateMap";
import TimeHelper from "../../helper_scripts/TimeHelper";





function Instruction(instruction: InstrType) {

    const valueUnit = (new UnitsMap()).getUnit(instruction.name);
    const instrStyle = (new InstructionStateMap()).getStyle(TimeHelper.getState(instruction.start, instruction.end));

    return (
        <div className="w-1/3 h-1/6 text-lg border-2 shadow rounded-xl justify-center py-4">
            <h3 className="font-extrabold text-xl">{instruction.name} in {instruction.chamberId === 0 ? "Chamber 1" : "Chamber 2"}</h3>
            <div className="flex flex-row items-center content-center justify-center space-x-8">
                <div className="flex flex-col">
                    <span className="font-semibold">Now:</span>
                    <span className="font-bold">{instruction.currParam} {valueUnit}</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Target:</span>
                    <span className="font-bold">{instruction.targetParam} {valueUnit}</span>
                </div>
            </div>
            <div className={"font-bold text-xl " + instrStyle?.style}>
                {instrStyle?.name}
            </div>

        </div>
    );
}

export default Instruction;
