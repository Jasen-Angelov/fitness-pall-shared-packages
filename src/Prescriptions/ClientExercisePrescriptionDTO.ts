export type ProgressionRule = 'linear' | 'percent_1rm' | 'rpe' | 'custom';

export interface ClientExercisePrescriptionDTO {
    /** Template row this prescription applies to */
    workoutExerciseId: number;

    /** What the client should do now (overrides template when present) */
    prescribedWeightKg?: number;
    prescribedRepsMin?: number;
    prescribedRepsMax?: number;
    prescribedRpePercent?: number;

    /** Optional progression knobs (may be unused by some programs) */
    progressionRule?: ProgressionRule;
    percent1rm?: number;
    incrementKg?: number;

    notes?: string;
}
