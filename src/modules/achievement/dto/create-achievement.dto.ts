import { IsNotEmpty, IsInt, IsArray, IsEmail } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateAchievementDto {
  // Kiểm tra email phải là chuỗi và đúng định dạng email
  @IsNotEmpty({ message: 'Email không được để trống' })
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email: string;

  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;

  // Kiểm tra số câu trả lời đúng phải là số nguyên và không trống
  @IsNotEmpty({ message: 'Số câu trả lời đúng không được để trống' })
  @IsInt({ message: 'Số câu trả lời đúng phải là một số nguyên' })
  numberCorrect: number;

  // Kiểm tra lựa chọn câu hỏi là mảng và không trống
  @IsNotEmpty({ message: 'Lựa chọn câu hỏi không được để trống' })
  @IsArray({ message: 'Lựa chọn câu hỏi phải là mảng' })
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.split(',') : value),
    { toClassOnly: true },
  ) // Chuyển chuỗi thành mảng
  numberWrong: string[];

  // Kiểm tra thời gian phải là số nguyên và không trống
  @IsNotEmpty({ message: 'Thời gian không được để trống' })
  @IsInt({ message: 'Thời gian phải là một số nguyên' })
  duration_minutes: number;
}
