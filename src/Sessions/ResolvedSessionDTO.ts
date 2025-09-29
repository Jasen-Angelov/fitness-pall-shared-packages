import type { TrainingSessionDTO } from './TrainingSessionDTO';

export interface ResolvedSessionExerciseItemDTO {
    workoutExerciseId: number;   // template WE id
    exerciseId: number;          // base exercise id
    executionType: string;       // e.g., 'normal'
    notes?: string;

    // Effective prescription to render (template overlaid by prescription when present)
    repsMin: number;
    repsMax: number;
    rpePercent?: number;
    prescribedWeightKg?: number;
}

export interface ResolvedSessionGroupDTO {
    id: number;
    label?: string;
    type: string;                 // 'single' | 'superset' | 'circuit' | etc.
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
