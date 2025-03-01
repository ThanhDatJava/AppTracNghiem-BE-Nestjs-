import {
  IsNotEmpty,
  IsArray,
  IsString,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { Transform } from 'class-transformer'; // Import Transform để xử lý

// Định nghĩa mức độ khó của câu hỏi (difficulty level)
export enum DifficultyLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Chủ đề câu hỏi không được để trống' })
  @IsString({ message: 'Chủ đề phải là chuỗi' })
  category: string;

  @IsNotEmpty({ message: 'Nội dung câu hỏi không được để trống' })
  @IsString({ message: 'Nội dung câu hỏi phải là chuỗi' })
  question_text: string;

  @IsNotEmpty({ message: 'Lựa chọn câu hỏi không được để trống' })
  @IsArray({ message: 'Lựa chọn câu hỏi phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  ) // Chuyển chuỗi thành mảng
  options: string[];

  @IsNotEmpty({ message: 'Đáp án đúng không được để trống' })
  @IsString({ message: 'Đáp án đúng phải là chuỗi' })
  correct_answer: string;

  @IsOptional()
  @IsString({ message: 'Giải thích phải là chuỗi' })
  explanation?: string;

  @IsNotEmpty({ message: 'Mức độ khó không được để trống' })
  @IsEnum(DifficultyLevel, {
    message: 'Mức độ khó phải là "easy", "medium" hoặc "hard"',
  })
  difficulty_level: DifficultyLevel;

  @IsOptional()
  @IsString({ message: 'Ảnh phải là chuỗi' })
  image?: string;

  // @IsOptional()
  // @IsString({ message: '_id bài quiz phải là chuỗi' })
  // _id_quiz?: string;

  @IsOptional({ message: '_id bài quiz không được để trống' })
  @IsArray({ message: '_id bài quiz phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  ) // Chuyển chuỗi thành mảng
  _id_quiz: string[];
}
