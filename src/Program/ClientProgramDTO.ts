import {ProgramDTO} from "./ProgramDTO";

export type ProgramStatus = 'active' | 'paused' | 'completed' | 'cancelled';

export interface ClientProgramAssignmentDTO {
    id: number;
    programId: number;           // numeric, matches Laravel
    programName: string;
    status: ProgramStatus;
    startAt?: string | null;     // ISO8601
    endAt?: string | null;       // ISO8601
    notes?: string | null;
}

export interface AttachClientProgramRequest {
    programId: number;           // numeric
    startAt?: string | null;     // ISO8601
    status?: ProgramStatus;      // default 'active'
    notes?: string | null;
}

export interface UpdateClientProgramRequest {
    status?: ProgramStatus;
    endAt?: string | null;       // ISO8601
    notes?: string | null;
}

export interface AttachClientProgramResponse {
    assignment: ClientProgramAssignmentDTO;
    program: ProgramDTO;
}