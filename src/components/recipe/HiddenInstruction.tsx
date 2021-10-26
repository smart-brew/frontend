import React from "react";
import InstrType from "../../types/InstrType";
import UnitsMap from "../../helper_scripts/UnitsMap";
import InstructionState from "../../types/InstructionState";


function HiddenInstruction(props: { instruction: InstrType; state: InstructionState | null}) {
    const valueUnit = (new UnitsMap()).getUnit(props.instruction.name);

    return (
        <div className="opacity-75 text-lg border-2 shadow rounded-xl content-center justify-center py-4 mt-3 bg-white flex flex-col space-x-5">
            <div className="flex flex-row content-center justify-center">
                <h3 className="text-xl text-gray-700 border-r-4 pr-3">
                    <span className="font-bold">{props.instruction.name}</span><span className="font-semibold"> in </span><span className="font-bold">{props.instruction.chamberId === 0 ? "Chamber 1" : "Chamber 2"}</span>
                </h3>
                <div className="flex flex-row items-center content-center justify-center ml-3">
                    <div className="flex flex-col text-gray-700">
                        <span className="font-bold">{props.instruction.targetParam} {valueUnit}</span>
                    </div>
                </div>
            </div>
            <div className={"font-bold text-xl pt-2 " + props.state?.style}>
                {props.state?.name}
            </div>

        </div>
    );
}

export default HiddenInstruction;
