
export default class UnitsMap {
    private units: Map<string, string> = new Map<string, string>();

    constructor() {

        this.units.set("heat up", "°C");
        this.units.set("motor", "RPM");

    }

    getUnit(instruction: string) {
        if (this.units.has(instruction.toLowerCase())) {
            return this.units.get(instruction);
        }
    }

}
