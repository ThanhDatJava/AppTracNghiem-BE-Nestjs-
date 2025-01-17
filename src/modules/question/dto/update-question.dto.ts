// import { PartialType } from '@nestjs/mapped-types';
// import { CreateQuestionDto } from './create-question.dto';
// import { IsEnum, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

// export enum DifficultyLevel {
//   Easy = 'easy',
//   Medium = 'medium',
//   Hard = 'hard',
// }

// export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
//   @IsMongoId({ message: '_id không hợp lệ' })
//   @IsNotEmpty({ message: '_id không được để trống' })
//   _id: string;

//   @IsOptional()
//   category?: string; // Tùy chọn

//   @IsOptional()
//   question_text?: string; // Tùy chọn

//   @IsOptional()
//   options?: string[]; // Tùy chọn

//   @IsOptional()
//   correct_answer?: string; // Tùy chọn

//   @IsOptional()
//   explanation?: string; // Tùy chọn

//   @IsOptional()
//   @IsEnum(DifficultyLevel, {
//     message: 'Mức độ khó phải là "easy", "medium" hoặc "hard"',
//   })
//   difficulty_level?: DifficultyLevel; // Tùy chọn

//   image?: string; // Tùy chọn
// }

import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionDto } from './create-question.dto';
import {
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsArray,
  IsString,
} from 'class-validator';

export enum DifficultyLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
  @IsMongoId({ message: '_id không hợp lệ' })
  @IsNotEmpty({ message: '_id không được để trống' })
  _id: string;

  @IsOptional()
  @IsString({ message: 'Danh mục phải là một chuỗi' })
  category?: string; // Tùy chọn

  @IsOptional()
  @IsString({ message: 'Văn bản câu hỏi phải là một chuỗi' })
  question_text?: string; // Tùy chọn

  @IsOptional()
  @IsArray({ message: 'Các lựa chọn phải là một mảng' })
  @IsString({ each: true, message: 'Mỗi lựa chọn phải là một chuỗi' })
  options?: string[]; // Tùy chọn

  @IsOptional()
  @IsString({ message: 'Đáp án đúng phải là một chuỗi' })
  correct_answer?: string; // Tùy chọn

  @IsOptional()
  @IsString({ message: 'Giải thích phải là một chuỗi' })
  explanation?: string; // Tùy chọn

  @IsOptional()
  @IsEnum(DifficultyLevel, { message: 'Mức độ khó không hợp lệ' })
  difficulty_level?: DifficultyLevel; // Tùy chọn

  @IsOptional()
  @IsString({ message: 'Đường dẫn hình ảnh phải là một chuỗi' })
  image?: string; // Tùy chọn
}
