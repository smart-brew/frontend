export default class TimeHelper {
  private static waitingState = 'WAITING';

  private static progressState = 'IN PROGRESS';

  private static successState = 'FINISHED';

  private static failedState = 'FAILED';

  static getState(start: number | null, end: number | null): string | null {
    let returnString = null;
    if (start === null && end === null) {
      returnString = this.waitingState;
    } else if (start !== null && end === null) {
      returnString = this.progressState;
    } else if (start !== null && end !== null) {
      returnString = this.successState; // TODO need to have a success/fail flag
    }

    return returnString;
  }
}
