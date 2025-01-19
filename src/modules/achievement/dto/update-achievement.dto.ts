import {
  IsArray,
  IsEmail,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateAchievementDto {
  @IsMongoId({ message: '_id không hợp lệ' })
  @IsNotEmpty({ message: '_id không được để trống' })
  _id: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email?: string;

  @IsOptional()
  name?: string;

  @IsOptional()
  @IsInt({ message: 'Số câu trả lời đúng phải là một số nguyên' })
  numberCorrect?: number;

  @IsOptional()
  @IsArray({ message: 'Lựa chọn câu hỏi phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  )
  numberWrong?: string[];

  @IsOptional()
  @IsInt({ message: 'Thời gian phải là một số nguyên' })
  duration_minutes?: number;
}
