import { ResponseMessage } from './../../decorator/customize';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Public } from '@/decorator/customize';
import { IdQuizDto } from './dto/id-quiz.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('get-detail-question')
  @Public()
  @ResponseMessage('Get detail question successfully')
  async getDetailQuestion() {
    return this.questionService.getDetailQuestion();
  }

  @Post('get-detail-question-by-id-quiz')
  @ResponseMessage('Get detail question by id quiz successfully')
  @Public()
  getDetailQuestionByIdQuiz(@Body() idQuizDto: IdQuizDto) {
    return this.questionService.getDetailQuestionByIdQuiz(idQuizDto);
  }

  @Post('create-detail-question')
  @ResponseMessage('Question created successfully')
  @Public()
  createDetailQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createDetailQuestion(createQuestionDto);
  }

  @Post('create-detail-question-to-word')
  @ResponseMessage('Created Question To Word successfully')
  @Public()
  createDetailQuestionToWord(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createDetailQuestionToWord(createQuestionDto);
  }

  @Post('edit-detail-question')
  @ResponseMessage('Question edit successfully')
  @Public()
  editDetailQuestion(@Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.editDetailQuestion(updateQuestionDto);
  }

  @Post('delete-detail-question')
  @ResponseMessage('Question edit successfully')
  @Public()
  deleteDetailQuestion(@Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.deleteDetailQuestion(updateQuestionDto);
  }
}
