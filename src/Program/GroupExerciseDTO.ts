import { UUID } from '../Utility/ids';

export interface GroupExerciseDTO {
    id: UUID;
    exerciseId: UUID;
    name: string;
    defaultSets?: number | null;
    defaultReps?: number | null;
    defaultRestSec?: number | null;
    defaultRpe?: number | null;
}
