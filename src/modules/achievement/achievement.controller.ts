import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { Public, ResponseMessage } from '@/decorator/customize';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post('create-detail-quiz')
  @ResponseMessage('Quiz created successfully')
  @Public()
  createDetailAchievement(@Body() detailAchievement: CreateAchievementDto) {
    return this.achievementService.createDetailAchievement(detailAchievement);
  }

  @Post('edit-detail-quiz')
  @ResponseMessage('Quiz edit successfully')
  @Public()
  editDetailAchievement(@Body() updateAchievementDto: UpdateAchievementDto) {
    return this.achievementService.editDetailAchievement(updateAchievementDto);
  }

  @Post('delete-detail-quiz')
  @ResponseMessage('Quiz edit successfully')
  @Public()
  deleteDetailAchievement(@Body() updateAchievementDto: UpdateAchievementDto) {
    return this.achievementService.deleteDetailAchievement(
      updateAchievementDto,
    );
  }
}
