export type ProgramStatus = 'active' | 'paused' | 'completed' | 'cancelled';
export interface ClientProgramAssignmentDTO {
    id: number;
    programId: number;
    programName: string;
    status: ProgramStatus;
    startAt?: string | null;
    endAt?: string | null;
    notes?: string | null;
}
export interface AttachClientProgramRequest {
    programId: number;
    startAt?: string | null;
    status?: ProgramStatus;
    notes?: string | null;
}
export interface UpdateClientProgramRequest {
    status?: ProgramStatus;
    endAt?: string | null;
    notes?: string | null;
}
