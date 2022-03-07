export default class UnitsMap {
  private units: Map<string, string> = new Map<string, string>();

  constructor() {
    this.units.set('TEMP', '°C');
    this.units.set('MOTOR', 'RPM');
    // this.units.set('false', 'OFF');
    // this.units.set('true', 'ON');
  }

  getUnit(instruction: string): string | undefined {
    if (instruction !== undefined) {
      console.log(instruction);
      const instr = instruction.split('_');
      if (this.units.has(instr[0])) {
        return this.units.get(instr[0]);
      }
    }
    return undefined;
  }
}
