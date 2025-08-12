/**
 * @package @fitness-pall/shared-dtos
 * Plans / Programs DTOs shared by React (FE) and Nest (BFF) and implemented by Laravel API.
 *
 * Conventions
 * - camelCase in DTOs
 * - snake_case only in DB columns (Laravel models map via API Resources).
 * - Keep these interfaces backwards compatible; prefer additive changes.
 */

/** Numeric identifiers used across entities */
export type Id = number;

/**
 * A slot inside a cycle references an existing Workout.
 * slotIndex starts at 1 and is unique within its cycle.
 */
export interface CycleSlotDTO {
    readonly id: Id;
    readonly slotIndex: number;
    readonly workoutId: Id;
    readonly label?: string;
}

/** A training cycle (aka block/phase) belonging to a PlanTemplate */
export interface CycleDTO {
    readonly id: Id;
    readonly name: string;
    readonly orderIndex: number;
    readonly repeats?: number;
    readonly slots: ReadonlyArray<CycleSlotDTO>;
}

/** A reusable program made of cycles and slots */
export interface PlanTemplateDTO {
    readonly id: Id;
    readonly name: string;
    readonly notes?: string;
    readonly cycles: ReadonlyArray<CycleDTO>;
}

/** Create requests */
export interface CreatePlanTemplateRequest {
    readonly name: string;
    readonly notes?: string;
}

export interface CreateCycleRequest {
    readonly name: string;
    readonly orderIndex: number;
    readonly repeats?: number;
}

export interface CreateSlotRequest {
    readonly slotIndex: number;
    readonly workoutId: Id;
    readonly label?: string;
}

export interface UpdatePlanTemplateRequest {
    readonly name?: string;
    readonly notes?: string;
}

export interface UpdateCycleRequest {
    readonly name?: string;
    readonly orderIndex?: number;
    readonly repeats?: number | null; // null to clear
}

export interface UpdateSlotRequest {
    readonly slotIndex?: number;
    readonly workoutId?: Id;
    readonly label?: string | null; // null to clear
}

