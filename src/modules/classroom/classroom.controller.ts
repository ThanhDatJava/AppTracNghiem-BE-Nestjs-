import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto, IdClassroom } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Public } from '@/decorator/customize';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post('get-detail-classroom-by-id-teacher')
  @Public()
  GetClassroomsByTeacher(@Body() idClassroom: IdClassroom) {
    return this.classroomService.GetClassroomsByTeacher(idClassroom);
  }

  @Post('create-detail-classroom')
  @Public()
  createDetailClassroom(@Body() createClassroomDto: CreateClassroomDto) {
    return this.classroomService.createDetailClassroom(createClassroomDto);
  }
}
