import { UUID } from '../Utility/ids';
import { GroupExerciseDTO } from './GroupExerciseDTO';
import { GroupType } from '../Utility/enums';
export interface GroupTemplateDTO {
    id: UUID;
    title?: string;
    order: number;
    type: GroupType;
    exercises: GroupExerciseDTO[];
}
