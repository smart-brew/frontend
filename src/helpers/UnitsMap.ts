export default class UnitsMap {
  private units: Map<string, string> = new Map<string, string>();

  constructor() {
    this.units.set('SET_TEMPERATURE', '°C');
    this.units.set('SET_MOTOR_SPEED', 'RPM');
  }

  getUnit(instruction: string): string | undefined {
    if (this.units.has(instruction)) {
      return this.units.get(instruction);
    }
    return undefined;
  }
}
