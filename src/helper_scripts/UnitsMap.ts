export default class UnitsMap {
  private units: Map<string, string> = new Map<string, string>();

  constructor() {
    this.units.set('heat up', '°C');
    this.units.set('motor', 'RPM');
    this.units.set('1', 'ON');
    this.units.set('0', 'OFF');
  }

  getUnit(instruction: string): string | undefined {
    const tempInstr = instruction.toLowerCase();
    if (this.units.has(tempInstr)) {
      return this.units.get(tempInstr);
    }
    return undefined;
  }
}
