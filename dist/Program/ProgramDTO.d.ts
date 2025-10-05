export interface ProgramDTO {
    id: number;
    name: string;
    notes?: string | null;
    cycles: ProgramCycleDTO[];
}
export interface ProgramCycleDTO {
    id: number;
    name: string;
    orderIndex: number;
    repeats?: number | null;
    slots: ProgramCycleWorkoutDTO[];
}
export interface ProgramCycleWorkoutDTO {
    id: number;
    slotIndex: number;
    workoutId: number;
    label?: string | null;
}
