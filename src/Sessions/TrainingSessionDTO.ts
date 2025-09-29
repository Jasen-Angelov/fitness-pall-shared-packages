export type TrainingSessionStatus = 'planned' | 'done' | 'missed' | 'canceled';

export interface TrainingSessionDTO {
    id: number;
    clientProgramId: number;
    cycleIndex: number;
    workoutId: number;

    /** ISO8601 UTC */
    plannedStartAt: string;
    plannedDurationMin: number;

    status: TrainingSessionStatus;

    /** ISO8601 UTC */
    actualStartAt?: string;
    actualDurationMin?: number;

    rpeFelt?: number;
    painFlag?: boolean;
    notes?: string;
}
