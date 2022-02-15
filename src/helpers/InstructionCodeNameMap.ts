export default class InstructionCodeNameMap {
  private instructions: Map<string, string> = new Map<string, string>();

  constructor() {
    this.instructions.set('SET_MOTOR_SPEED', 'Motor speed');
    this.instructions.set('WAIT', 'Wait');
    this.instructions.set('SET_TEMPERATURE', 'Temperature');
    this.instructions.set('UNLOAD', 'Unload');
    this.instructions.set('TRANSFER_LIQUIDS', 'Transfer liquids');
    this.instructions.set('MANUAL', 'Manual step');
  }

  getInstructionName(codeName: string): string | undefined {
    if (this.instructions.has(codeName)) {
      return this.instructions.get(codeName);
    }
    return undefined;
  }
}
