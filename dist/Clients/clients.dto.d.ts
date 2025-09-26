import { ClientStatus, Gender, Nullable, UnitSystem } from '../Utility/enums';
export interface ClientDTO {
    id: number;
    trainerId: number;
    accountUserId: Nullable<number>;
    name: string;
    email: Nullable<string>;
    phone: Nullable<string>;
    status: ClientStatus;
    gender: Gender;
    birthdate: Nullable<string>;
    height: Nullable<number>;
    preferredUnits: UnitSystem;
    goals: Nullable<Record<string, unknown>>;
    notes: Nullable<string>;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}
export interface CreateClientRequest {
    name: string;
    email?: string | null;
    phone?: string | null;
    status?: ClientStatus;
    gender?: Gender;
    birthdate?: string | null;
    height?: number | null;
    preferredUnits?: UnitSystem;
    goals?: Record<string, unknown> | null;
    notes?: string | null;
    tags?: string[] | null;
    accountUserId?: number | null;
}
export type UpdateClientRequest = Partial<CreateClientRequest>;
