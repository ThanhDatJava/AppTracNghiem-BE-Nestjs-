import { ResponseMessage } from './../../decorator/customize';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import mongoose, { Model, Query } from 'mongoose';
import { Question } from './schemas/question.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { IdQuizDto } from './dto/id-quiz.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name)
    private questionModel: Model<Question>,
  ) {}

  fs = require('fs');

  async createDetailQuestion(createQuestionDto: CreateQuestionDto) {
    const {
      category,
      question_text,
      options, // options sẽ là mảng chuỗi sau khi xử lý trong DTO
      correct_answer,
      explanation,
      difficulty_level,
      image, // Hình ảnh dạng Base64
      _id_quiz,
    } = createQuestionDto;

    // Kiểm tra và xử lý chuỗi Base64 của hình ảnh
    let base64Image = '';
    if (image) {
      base64Image = image;
    }

    // Tạo câu hỏi mới trong cơ sở dữ liệu
    const question = await this.questionModel.create({
      category,
      question_text,
      options, // options đã là mảng chuỗi
      correct_answer,
      explanation,
      difficulty_level,
      image: base64Image, // Lưu chuỗi Base64 của hình ảnh
      _id_quiz,
    });

    return {
      _id: question._id,
    };
  }

  async editDetailQuestion(updateQuestionDto: UpdateQuestionDto) {
    return await this.questionModel.updateOne(
      {
        _id: updateQuestionDto._id,
      },
      { ...updateQuestionDto },
    );
  }

  async deleteDetailQuestion(updateQuestionDto: UpdateQuestionDto) {
    const { _id } = updateQuestionDto;
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

  async getDetailQuestion() {
    const data = await this.questionModel.find();

    if (data) {
      // Delete the document and return the result (or just the deleted data)
      return data;
    } else {
      throw new BadRequestException('Id không tồn tại');
    }
  }

  async getDetailQuestionByIdQuiz(idQuizDto: IdQuizDto) {
    const { _id_quiz } = idQuizDto;

    const question = await this.questionModel.find({
      _id_quiz: { $in: _id_quiz.map((id) => id) }, // Chuyển chuỗi thành ObjectId
    });

    return {
      question,
    };
  }
}
