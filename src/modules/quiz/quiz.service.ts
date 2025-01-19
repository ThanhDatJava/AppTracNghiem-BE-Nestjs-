import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './schemas/quiz.schemas';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz.name)
    private questionModel: Model<Quiz>,
  ) {}

  fs = require('fs');

  async createDetailQuiz(detailQuiz: CreateQuizDto) {
    const {
      quiz_name,
      description,
      questions, // options sẽ là mảng chuỗi sau khi xử lý trong DTO
      duration_minutes,
      image,
    } = detailQuiz;

    // Kiểm tra và xử lý chuỗi Base64 của hình ảnh
    let base64Image = '';
    if (image) {
      base64Image = image.split(',')[1]; // Nếu hình ảnh là Base64
    }

    // Tạo câu hỏi mới trong cơ sở dữ liệu
    const question = await this.questionModel.create({
      quiz_name,
      description,
      questions, // options đã là mảng chuỗi
      duration_minutes,
      image: base64Image,
    });

    return {
      _id: question._id,
    };
  }

  async editDetailQuiz(updateQuizDto: UpdateQuizDto) {
    return await this.questionModel.updateOne(
      {
        _id: updateQuizDto._id,
      },
      { ...updateQuizDto },
    );
  }

  async deleteDetailQuiz(updateQuizDto: UpdateQuizDto) {
    const { _id } = updateQuizDto;
    // Check if the provided ID is valid
    if (!mongoose.isValidObjectId(_id)) {
      throw new BadRequestException('Invalid or empty ID format');
    }

    const data = await this.questionModel.findOne({ _id });

    if (data) {
      // Delete the document and return the result (or just the deleted data)
      await this.questionModel.deleteOne({ _id });
      return { message: 'Document successfully deleted' };
    } else {
      throw new BadRequestException('Id không tồn tại');
    }
  }
}
