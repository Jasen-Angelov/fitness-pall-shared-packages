export interface ProgramDTO {
    id: number;
    name: string;
    notes?: string | null;
    cycles: ProgramCycleDTO[]; // included in ProgramResource when loaded
}

export interface ProgramCycleDTO {
    id: number;
    name: string;
    orderIndex: number;        // 1..N
    repeats?: number | null;   // optional repeats for the cycle
    slots: ProgramCycleWorkoutDTO[];
}

export interface ProgramCycleWorkoutDTO {
    id: number;
    slotIndex: number;         // 1..N within the cycle
    workoutId: number;         // FK to Workout
    label?: string | null;     // optional display label
}

