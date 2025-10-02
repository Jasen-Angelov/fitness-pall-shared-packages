import type { TrainingSessionDTO } from './TrainingSessionDTO';
export interface ResolvedSessionExerciseItemDTO {
    workoutExerciseId: number;
    exerciseId: number;
    executionType: string;
    notes?: string;
    repsMin: number;
    repsMax: number;
    rpePercent?: number;
    prescribedWeightKg?: number;
}
export interface ResolvedSessionGroupDTO {
    id: number;
    label?: string;
    type: string;
    sets: number;
    restBetweenSetsSeconds: number;
    restAfterGroupSeconds: number;
    items: ResolvedSessionExerciseItemDTO[];
}
export interface ResolvedSessionDTO {
    session: TrainingSessionDTO;
    workout: {
        id: number;
        name: string;
        notes?: string;
        groups: ResolvedSessionGroupDTO[];
    };
}
