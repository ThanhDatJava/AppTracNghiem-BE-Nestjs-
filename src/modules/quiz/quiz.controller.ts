import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Public, ResponseMessage } from '@/decorator/customize';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post('create-detail-quiz')
  @ResponseMessage('Quiz created successfully')
  @Public()
  createDetailQuiz(@Body() detailQuiz: CreateQuizDto) {
    return this.quizService.createDetailQuiz(detailQuiz);
  }

  @Post('edit-detail-quiz')
  @ResponseMessage('Quiz edit successfully')
  @Public()
  editDetailQuiz(@Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.editDetailQuiz(updateQuizDto);
  }

  @Post('delete-detail-quiz')
  @ResponseMessage('Quiz edit successfully')
  @Public()
  deleteDetailQuiz(@Body() UpdateQuizDto: UpdateQuizDto) {
    return this.quizService.deleteDetailQuiz(UpdateQuizDto);
  }
}
