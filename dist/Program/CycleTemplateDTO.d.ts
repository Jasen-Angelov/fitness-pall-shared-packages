import { UUID } from '../Utility/ids';
import { WorkoutTemplateDTO } from './WorkoutTemplateDTO';
export interface CycleTemplateDTO {
    id: UUID;
    title: string;
    order: number;
    repeatCount: number;
    distinctWorkouts: WorkoutTemplateDTO[];
}
