import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionDto } from './create-question.dto';
import { IsArray, IsMongoId, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class IdQuizDto extends PartialType(CreateQuestionDto) {
  @IsNotEmpty({ message: '_id bài quiz không được để trống' })
  @IsArray({ message: '_id bài quiz phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  ) // Chuyển chuỗi thành mảng
  _id_quiz: string[];
}
