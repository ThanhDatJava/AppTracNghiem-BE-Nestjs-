// import {
//   IsNotEmpty,
//   IsArray,
//   IsString,
//   IsEnum,
//   IsOptional,
// } from 'class-validator';
// import { Transform } from 'class-transformer'; // Import Transform để xử lý

// // Định nghĩa mức độ khó của câu hỏi (difficulty level)
// export enum DifficultyLevel {
//   Easy = 'easy',
//   Medium = 'medium',
//   Hard = 'hard',
// }

// export class CreateQuestionDto {
//   @IsOptional({ message: 'Chủ đề câu hỏi không được để trống' })
//   category: string;

//   @IsNotEmpty({ message: 'Nội dung câu hỏi không được để trống' })
//   @IsString({ message: 'Nội dung câu hỏi phải là chuỗi' })
//   question_text: string;

//   @IsNotEmpty({ message: 'Lựa chọn câu hỏi không được để trống' })
//   @IsArray({ message: 'Lựa chọn câu hỏi phải là mảng' })
//   @Transform(
//     ({ value }) => (typeof value === 'string' ? value.split(',') : value),
//     { toClassOnly: true },
//   ) // Chuyển chuỗi thành mảng
//   options: string[];

//   @IsNotEmpty({ message: 'Đáp án đúng không được để trống' })
//   @IsString({ message: 'Đáp án đúng phải là chuỗi' })
//   correct_answer: string;

//   @IsOptional()
//   @IsString({ message: 'Giải thích phải là chuỗi' })
//   explanation?: string;

//   @IsOptional({ message: 'Mức độ khó không được để trống' })
//   @IsEnum(DifficultyLevel, {
//     message: 'Mức độ khó phải là "easy", "medium" hoặc "hard"',
//   })
//   difficulty_level: DifficultyLevel;

//   @IsOptional()
//   @IsString({ message: 'Ảnh phải là chuỗi' })
//   image?: string;

//   @IsOptional({ message: '_id bài quiz không được để trống' })
//   @IsArray({ message: '_id bài quiz phải là mảng' })
//   @Transform(
//     ({ value }) => (typeof value === 'string' ? value.split(',') : value),
//     { toClassOnly: true },
//   ) // Chuyển chuỗi thành mảng
//   _id_quiz: string[];
// }

import { Transform } from 'class-transformer';
import { IsArray, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty({ message: 'Nội dung câu hỏi không được để trống' })
  question_text: string;

  @IsArray({ message: 'Lựa chọn câu hỏi phải là mảng' })
  @IsOptional()
  @IsNotEmpty({ message: 'Lựa chọn câu hỏi không được để trống' })
  options: string[];

  @IsString()
  @IsNotEmpty({ message: 'Đáp án đúng không được để trống' })
  correct_answer: string;

  @IsOptional()
  @IsString({ message: 'Ảnh phải là chuỗi' })
  image?: string;

  @IsOptional({ message: '_id bài quiz không được để trống' })
  @IsArray({ message: '_id bài quiz phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  ) // Chuyển chuỗi thành mảng
  _id_quiz: string[];
}
