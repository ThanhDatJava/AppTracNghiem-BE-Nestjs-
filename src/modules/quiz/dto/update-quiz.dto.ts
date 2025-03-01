import { PartialType } from '@nestjs/mapped-types';
import { CreateQuizDto } from './create-quiz.dto';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';

export enum DifficultyLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export class UpdateQuizDto extends PartialType(CreateQuizDto) {
  @IsMongoId({ message: '_id không hợp lệ' })
  @IsNotEmpty({ message: '_id không được để trống' })
  _id: string;

  // quiz_name có thể thay đổi và là email nếu cần, nhưng cần @IsOptional()
  @IsOptional()
  @IsString({ message: 'Tên quiz phải là chuỗi' })
  quiz_name?: string;

  @IsOptional()
  @IsString({ message: 'Mô tả quiz phải là chuỗi' })
  description?: string;

  @IsOptional()
  @IsEnum(DifficultyLevel, { message: 'Mức độ khó không hợp lệ' })
  difficulty_level?: DifficultyLevel; // Tùy chọn

  @IsOptional()
  @IsArray({ message: 'Lựa chọn câu hỏi phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  ) // Chuyển chuỗi thành mảng nếu cần
  questions?: string[];

  @IsOptional()
  // @IsInt({ message: 'Thời gian phải là một số nguyên' })
  duration_minutes?: string;

  @IsOptional()
  @IsString({ message: 'Ảnh phải là chuỗi' })
  image?: string;
}
