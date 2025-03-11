import { PartialType } from '@nestjs/mapped-types';
import { CreateClassroomDto } from './create-classroom.dto';
import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateClassroomDto extends PartialType(CreateClassroomDto) {
  @IsMongoId({ message: '_id không hợp lệ' })
  @IsNotEmpty({ message: '_id không được để trống' })
  _id: string;

  @IsOptional()
  @IsString({ message: 'Tên lớp học phải là một chuỗi' })
  name_classroom?: string; // Tùy chọn

  @IsOptional()
  @IsString({ message: 'mỗi _id teacher phải là một chuỗi' })
  _id_teacher?: string; // Tùy chọn

  @IsOptional()
  @IsArray({ message: '_id bài quiz là một mảng' })
  @IsString({ each: true, message: 'mỗi _id bài quiz phải là một chuỗi' })
  _id_student?: string[]; // Tùy chọn

  @IsOptional()
  @IsArray({ message: '_id bài quiz là một mảng' })
  @IsString({ each: true, message: 'mỗi _id bài quiz phải là một chuỗi' })
  _id_quiz?: string[]; // Tùy chọn

  @IsOptional()
  @IsString({ message: 'Đường dẫn hình ảnh phải là một chuỗi' })
  image?: string; // Tùy chọn
}
