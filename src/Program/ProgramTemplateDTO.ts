import { UUID } from '../Utility/ids';
import { CycleTemplateDTO } from './CycleTemplateDTO';

export interface ProgramTemplateDTO {
    id: UUID;
    name: string;
    notes?: string;
    cycles: CycleTemplateDTO[];
}
