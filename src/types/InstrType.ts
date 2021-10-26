
type InstrType = {
    id: number,
    name: string,               // type of instruction
    currParam: number,          // current parameter value
    targetParam: number,        // target parameter value
    start: number | null,       // begin timestamp
    end: number | null,         // end timestamp
    orderNum: number,           // order in recipe
    chamberId: number,
    recipeId? : number,
    templateId? : number
};

export default InstrType;
