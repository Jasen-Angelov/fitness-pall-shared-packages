/**
 * Request payload for generating dated training sessions from cycles/slots.
 * One of `daysPerWeek` or `weekdays` should be provided.
 */
export interface GenerateTrainingSessionsRequest {
    /** Local date to start scheduling from (YYYY-MM-DD) */
    startDate: string;

    /** IANA timezone, e.g. "Europe/Sofia" */
    timezone: string;

    /** HH:mm (24h) local time of day for sessions */
    timeOfDay: string;

    /** How many weeks to expand */
    spanWeeks: number;

    /** e.g. 3 -> Mon/Wed/Fri default spread when `weekdays` is omitted */
    daysPerWeek?: number;

    /**
     * Explicit weekdays (0..6, Sun..Sat). If set, `daysPerWeek` is ignored.
     * Example: [1,3,5] for Mon/Wed/Fri
     */
    weekdays?: number[];
}
