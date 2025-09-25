import { UUID } from '../Utility/ids';
import { GroupTemplateDTO } from './GroupTemplateDTO';

export interface WorkoutTemplateDTO {
    id: UUID;
    title: string;
    order: number;
    groups: GroupTemplateDTO[];
}
