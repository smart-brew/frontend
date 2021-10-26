import InstrType from "../../types/InstrType";
import UnitsMap from "../../helper_scripts/UnitsMap";
import React from "react";
import InstructionState from "../../types/InstructionState";


function FullInstruction(props: { instruction: InstrType; state: InstructionState | null}) {
    const valueUnit = (new UnitsMap()).getUnit(props.instruction.name);

    return (
        <div className="h-1/6 text-lg border-2 shadow rounded-xl justify-center py-4 mt-3 bg-white">
            <h3 className="text-xl">
                <span className="font-bold">{props.instruction.name}</span><span className="font-semibold"> in </span><span className="font-bold">{props.instruction.chamberId === 0 ? "Chamber 1" : "Chamber 2"}</span>
            </h3>
            <div className="flex flex-row items-center content-center justify-center space-x-8">
                <div className="flex flex-col">
                    <span className="font-semibold">Now:</span>
                    <span className="font-bold">{props.instruction.currParam} {valueUnit}</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Target:</span>
                    <span className="font-bold">{props.instruction.targetParam} {valueUnit}</span>
                </div>
            </div>
            <div className={"font-bold text-xl " + props.state?.style}>
                {props.state?.name}
            </div>

        </div>
    );
}

export default FullInstruction;
