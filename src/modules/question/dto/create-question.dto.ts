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
