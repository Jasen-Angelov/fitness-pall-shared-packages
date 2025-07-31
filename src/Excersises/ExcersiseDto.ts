import {
    IsUUID,
    IsOptional,
    IsString,
    IsUrl,
    IsArray,
    IsDateString,
} from 'class-validator';

export class ExerciseDTO {
    @IsUUID()
    @IsOptional()
    id?: string;

    @IsString()
    name!: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    variant?: string;

    @IsString()
    type!: string;

    @IsArray()
    @IsString({ each: true })
    muscleGroups!: string[];

    @IsUrl()
    @IsOptional()
    videoUrl?: string;

    @IsUUID()
    @IsOptional()
    userId?: string;

    @IsDateString()
    @IsOptional()
    createdAt?: string;

    @IsDateString()
    @IsOptional()
    updatedAt?: string;
}
