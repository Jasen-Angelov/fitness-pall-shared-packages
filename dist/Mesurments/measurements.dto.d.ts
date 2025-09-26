import { Nullable } from '../Utility/enums';
export interface ClientMeasurementDTO {
    id: number;
    clientId: number;
    measuredAt: string;
    weight: Nullable<number>;
    height: Nullable<number>;
    bodyFatPercent: Nullable<number>;
    neck: Nullable<number>;
    chest: Nullable<number>;
    biceps: Nullable<number>;
    waist: Nullable<number>;
    hips: Nullable<number>;
    thigh: Nullable<number>;
    calf: Nullable<number>;
    restingHr: Nullable<number>;
    bpSystolic: Nullable<number>;
    bpDiastolic: Nullable<number>;
    bmi: Nullable<number>;
    createdAt: string;
    updatedAt: string;
}
export interface CreateMeasurementRequest {
    measuredAt: string;
    weight?: number | null;
    height?: number | null;
    bodyFatPercent?: number | null;
    neck?: number | null;
    chest?: number | null;
    biceps?: number | null;
    waist?: number | null;
    hips?: number | null;
    thigh?: number | null;
    calf?: number | null;
    restingHr?: number | null;
    bpSystolic?: number | null;
    bpDiastolic?: number | null;
}
export type UpdateMeasurementRequest = Partial<CreateMeasurementRequest>;
