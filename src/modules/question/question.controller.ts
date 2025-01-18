import { ResponseMessage } from './../../decorator/customize';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Public } from '@/decorator/customize';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Post('create-detail-question')
  @ResponseMessage('Question created successfully')
  @Public()
  createDetailQuestion(@Body() detailQuestion: CreateQuestionDto) {
    return this.questionService.createDetailQuestion(detailQuestion);
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
