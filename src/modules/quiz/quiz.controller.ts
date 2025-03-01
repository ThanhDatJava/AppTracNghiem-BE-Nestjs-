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

  @Get('get-detail-quiz')
  @Public()
  @ResponseMessage('Get detail quiz successfully')
  async getDetailQuiz() {
    return this.quizService.getDetailQuiz();
  }

  @Get('get-name-quiz')
  @Public()
  @ResponseMessage('Get name quiz successfully')
  async getNameQuiz() {
    return this.quizService.getNameQuiz();
  }

  @Post('get-detail-quiz-by-id')
  @ResponseMessage('Get detail quiz edit successfully')
  @Public()
  getDetailQuizById(@Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.getDetailQuizById(updateQuizDto);
  }

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
  deleteDetailQuiz(@Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.deleteDetailQuiz(updateQuizDto);
  }

  @Post('get-name-by-id-quiz')
  @ResponseMessage('Quiz created successfully')
  @Public()
  getNameByIdQuiz(@Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.getNameByIdQuiz(updateQuizDto);
  }
}
