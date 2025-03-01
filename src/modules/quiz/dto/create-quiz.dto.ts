import {
  IsNotEmpty,
  IsInt,
  IsArray,
  IsString,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { Transform } from 'class-transformer';

export enum DifficultyLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export class CreateQuizDto {
  // Tên quiz (tên của quiz, dễ nhận diện)
  @IsNotEmpty({ message: 'Tên quiz không được để trống' })
  @IsString({ message: 'Tên quiz phải là chuỗi' })
  quiz_name: string;

  // Mô tả quiz (miêu tả chi tiết về quiz)
  @IsNotEmpty({ message: 'Mô tả quiz không được để trống' })
  @IsString({ message: 'Mô tả quiz phải là chuỗi' })
  description: string;

  @IsNotEmpty({ message: 'Mức độ khó không được để trống' })
  @IsEnum(DifficultyLevel, {
    message: 'Mức độ khó phải là "easy", "medium" hoặc "hard"',
  })
  difficulty_level: DifficultyLevel;

  // Kiểm tra lựa chọn câu hỏi là mảng và không trống
  @IsOptional({ message: 'Lựa chọn câu hỏi không được để trống' })
  @IsArray({ message: 'Lựa chọn câu hỏi phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  ) // Chuyển chuỗi thành mảng
  questions: string[];

  // Kiểm tra thời gian làm bài phải là số nguyên và không trống
  @IsNotEmpty({ message: 'Thời gian không được để trống' })
  duration_minutes: string;

  @IsOptional()
  @IsString({ message: 'Ảnh phải là chuỗi' })
  image?: string;
}
