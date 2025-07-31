import {
    IsArray,
    IsOptional,
    IsString,
    IsUrl,
    IsIn,
    IsNotEmpty,
} from 'class-validator';

export class CreateExerciseRequest {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    variant?: string;

    @IsUrl()
    @IsOptional()
    videoUrl?: string;

    @IsArray()
    @IsString({ each: true })
    muscleGroups!: string[];

    @IsString()
    @IsOptional()
    @IsIn(['Изолиращо', 'Съставно'])
    type?: string;
}
