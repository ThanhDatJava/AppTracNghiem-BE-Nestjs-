import { Transform } from 'class-transformer';
import {
  IsArray,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsMongoId,
} from 'class-validator';

export class CreateClassroomDto {
  @IsString()
  @IsNotEmpty({ message: 'Nội dung câu hỏi không được để trống' })
  name_classroom: string;

  @IsOptional({ message: '_id teacher không được để trống' })
  @IsString({ message: '_id teacher phải là chuỗi' })
  _id_teacher?: string;

  @IsOptional({ message: '_id_student không được để trống' })
  @IsArray({ message: '_id_student phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  ) // Chuyển chuỗi thành mảng
  @IsOptional({ message: '_id_student không được để trống' })
  @IsArray({ message: '_id_student phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  ) // Chuyển chuỗi thành mảng
  _id_student: string[];

  @IsOptional({ message: '_id bài quiz không được để trống' })
  @IsArray({ message: '_id bài quiz phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  ) // Chuyển chuỗi thành mảng
  _id_quiz: string[];

  @IsOptional()
  @IsString({ message: 'Ảnh phải là chuỗi' })
  image?: string;
}

export class IdClassroom {
  @IsOptional({ message: '_id teacher không được để trống' })
  @IsString({ message: '_id teacher là chuỗi' })
  _id_teacher: string;

  @IsOptional({ message: '_id student không được để trống' })
  @IsString({ message: '_id student la chuỗi' })
  _id_student: string;

  @IsOptional({ message: '_id  quiz không được để trống' })
  @IsString({ message: '_id quiz là chuỗi' })
  _id_quiz: string;
}
