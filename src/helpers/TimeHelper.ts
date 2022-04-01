export default class TimeHelper {
  private static waitingState = 'WAITING';

  private static progressState = 'IN PROGRESS';

  private static successState = 'FINISHED';

  private static failedState = 'FAILED';

  static MILLIS_DAYS = 86400000;

  static MILLIS_HOURS = 3600000;

  static MILLIS_MINUTES = 60000;

  static MILLIS_SECONDS = 1000;

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

  static getDaysFromMillis = (millis: string | number): number => {
    if (typeof millis === 'string') {
      millis = parseInt(millis, 10);
    }
    return Math.floor(millis / TimeHelper.MILLIS_DAYS);
    return 0;
  };

  static getHoursFromMillis = (millis: string | number): number => {
    if (typeof millis === 'string') {
      millis = parseInt(millis, 10);
    }
    const newMillis = millis % TimeHelper.MILLIS_DAYS;
    if (newMillis > 0) {
      return Math.floor(newMillis / TimeHelper.MILLIS_HOURS);
    }
    return 0;
  };

  static getMinutesFromMillis = (millis: string | number): number => {
    if (typeof millis === 'string') {
      millis = parseInt(millis, 10);
    }
    let newMillis = millis % TimeHelper.MILLIS_DAYS;
    newMillis %= TimeHelper.MILLIS_HOURS;
    if (newMillis > 0) {
      return Math.floor(newMillis / TimeHelper.MILLIS_MINUTES);
    }
    return 0;
  };

  static getSecondsFromMillis = (millis: string | number): number => {
    if (typeof millis === 'string') {
      millis = parseInt(millis, 10);
    }
    let newMillis = millis % TimeHelper.MILLIS_DAYS;
    newMillis %= TimeHelper.MILLIS_HOURS;
    newMillis %= TimeHelper.MILLIS_MINUTES;
    if (newMillis > 0) {
      return Math.floor(newMillis / TimeHelper.MILLIS_SECONDS);
    }
    return 0;
  };

  static convertTimeToMillis = (
    days: number,
    hours: number,
    minutes: number
  ): number => {
    let millis = 0;
    millis += minutes * TimeHelper.MILLIS_MINUTES;
    millis += hours * TimeHelper.MILLIS_HOURS;
    millis += days * TimeHelper.MILLIS_DAYS;

    return millis;
  };
}
