import { IsOptional, IsString, IsUrl, IsUUID } from 'class-validator';

export class ExerciseDTO {
    @IsUUID()
    @IsOptional()
    id?: string;

    @IsString()
    name!: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsUrl()
    @IsOptional()
    videoUrl?: string;
}
