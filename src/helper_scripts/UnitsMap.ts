
export default class UnitsMap {
    private units: Map<string, string> = new Map<string, string>();

    constructor() {

        this.units.set("Heat up", "°C");
        this.units.set("Motor", "RPM");

    }

    getUnit(instruction: string) {
        if (this.units.has(instruction)) {
            return this.units.get(instruction);
        }
    }

}
