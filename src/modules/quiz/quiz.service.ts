import { QuizModule } from './quiz.module';
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
    private quizModel: Model<Quiz>,
  ) {}

  async getDetailQuiz() {
    const data = await this.quizModel.find();

    if (data) {
      // Delete the document and return the result (or just the deleted data)
      return data;
    } else {
      throw new BadRequestException('Id không tồn tại');
    }
  }

  async getNameQuiz() {
    const data = await this.quizModel.find().select('quiz_name');

    if (data) {
      // Delete the document and return the result (or just the deleted data)
      return data;
    } else {
      throw new BadRequestException('Id không tồn tại');
    }
  }

  async getDetailQuizById(updateQuizDto: UpdateQuizDto) {
    const data = await this.quizModel.find({
      _id: updateQuizDto._id,
    });

    if (data) {
      // Delete the document and return the result (or just the deleted data)
      return data;
    } else {
      throw new BadRequestException('Id không tồn tại');
    }
  }

  fs = require('fs');

  async createDetailQuiz(detailQuiz: CreateQuizDto) {
    const {
      quiz_name,
      description,
      duration_minutes,
      image,
      difficulty_level,
    } = detailQuiz;

    // Kiểm tra và xử lý chuỗi Base64 của hình ảnh
    let base64Image = '';
    if (image) {
      base64Image = image;
    }

    // Tạo câu hỏi mới trong cơ sở dữ liệu
    const quiz = await this.quizModel.create({
      quiz_name,
      description,
      duration_minutes,
      image: base64Image,
      difficulty_level,
    });

    return {
      _id: quiz._id,
    };
  }

  async editDetailQuiz(updateQuizDto: UpdateQuizDto) {
    return await this.quizModel.updateOne(
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

    const data = await this.quizModel.findOne({ _id });

    if (data) {
      // Delete the document and return the result (or just the deleted data)
      await this.quizModel.deleteOne({ _id });
      return { message: 'Document successfully deleted' };
    } else {
      throw new BadRequestException('Id không tồn tại');
    }
  }

  async getNameByIdQuiz(updateQuizDto: UpdateQuizDto) {
    const { _id } = updateQuizDto;
    // Check if the provided ID is valid
    if (!mongoose.isValidObjectId(_id)) {
      throw new BadRequestException('Invalid or empty ID format');
    }

    const data = await this.quizModel.findOne({ _id });

    if (data) {
      // Delete the document and return the result (or just the deleted data)
      return { quiz_name: data.quiz_name };
      // return { message: 'Document successfully deleted' };
    } else {
      throw new BadRequestException('Id không tồn tại');
    }
  }
}
