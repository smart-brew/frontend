export default class TimeHelper {
    private static waitingState: string = "WAITING";
    private static progressState: string = "IN PROGRESS";
    private static successState: string = "FINISHED";
    private static failedState : string = "FAILED";

    static getState(start: number | null, end: number | null): string | null {
        let returnString = null;
        if (start === null && end === null) {
            returnString = this.waitingState;
        } else if (start !== null && end === null) {
            returnString = this.progressState;
        } else if (start !== null && end !== null) {
            returnString = this.successState;   // TODO need to have a success/fail flag
        }

        return returnString;
    }

}
