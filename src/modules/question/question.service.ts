import { ResponseMessage } from './../../decorator/customize';
import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Model, Query } from 'mongoose';
import { Question } from './schemas/question.schemas';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name)
    private questionModel: Model<Question>,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }

  findAll() {
    return `This action returns all question`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }

  fs = require('fs');

  async createDetailQuestion(detailQuestion: CreateQuestionDto) {
    const {
      category,
      question_text,
      options, // options sẽ là mảng chuỗi sau khi xử lý trong DTO
      correct_answer,
      explanation,
      difficulty_level,
      image, // Hình ảnh dạng Base64
    } = detailQuestion;

    // Kiểm tra và xử lý chuỗi Base64 của hình ảnh
    let base64Image = '';
    if (image) {
      base64Image = image.split(',')[1]; // Nếu hình ảnh là Base64
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
    });

    return {
      _id: question._id,
    };
  }
}
