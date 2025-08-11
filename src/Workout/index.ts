export interface WorkoutCreateRequest {
    name: string;
    notes?: string;
    groups: WorkoutGroupInput[];
}

export interface WorkoutGroupInput {
    label?: string;
    type: 'single' | 'superset' | 'circuit';
    sets: number;
    restBetweenSetsSeconds: number;
    restAfterGroupSeconds: number;
    exercises: ExerciseInGroupInput[];
}

export interface ExerciseInGroupInput {
    config: {
        exerciseId: string;
        repsMin: number;
        repsMax: number;
        rpePercent?: number;
        notes?: string;
        executionType: string;
    };
}

export interface WorkoutDTO {
    id: number;
    name: string;
    notes?: string;
    groups: WorkoutGroupDTO[];
}

export interface WorkoutGroupDTO {
    id: number;
    type: string;
    label?: string;
    sets: number;
    restBetweenSetsSeconds: number;
    restAfterGroupSeconds: number;
    exercises: ExerciseInGroupDTO[];
}

export interface ExerciseInGroupDTO {
    id: number;
    exercise: {
        id: string;
        name: string;
    };
    config: {
        repsMin: number;
        repsMax: number;
        rpePercent?: number;
        notes?: string;
        executionType: string;
    };
}
