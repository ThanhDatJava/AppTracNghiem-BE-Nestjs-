import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClassroomDto, IdClassroom } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Classroom } from './schemas/classroom.schemas';
import { Model } from 'mongoose';

@Injectable()
export class ClassroomService {
  @InjectModel(Classroom.name)
  private ClassroomModel: Model<Classroom>;

  async createDetailClassroom(createClassroomDto: CreateClassroomDto) {
    const {
      name_classroom,
      _id_teacher, // options sẽ là mảng chuỗi sau khi xử lý trong DTO
      _id_student,
      _id_quiz,
      image, // Hình ảnh dạng Base64
    } = createClassroomDto;

    // Kiểm tra và xử lý chuỗi Base64 của hình ảnh
    let base64Image = '';
    if (image) {
      base64Image = image;
    }

    // Tạo câu hỏi mới trong cơ sở dữ liệu
    const question = await this.ClassroomModel.create({
      name_classroom,
      _id_teacher, // options đã là mảng chuỗi
      _id_student,
      _id_quiz,
      image: base64Image, // Lưu chuỗi Base64 của hình ảnh
    });

    return {
      _id: question._id,
    };
  }

  async GetClassroomsByTeacher(idClassroom: IdClassroom) {
    const { _id_teacher } = idClassroom;
    const data = await this.ClassroomModel.find({
      _id_teacher: _id_teacher, // Lọc theo _id_teacher
    });

    if (data && data.length > 0) {
      return data; // Trả về tất cả lớp học của giáo viên đó
    } else {
      throw new BadRequestException(
        'Không tìm thấy lớp học nào của giáo viên này',
      ); // Nếu không có dữ liệu
    }
  }
}
