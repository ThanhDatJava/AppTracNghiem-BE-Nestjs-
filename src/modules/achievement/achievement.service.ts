import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { Achievement } from './schemas/achievement.schemas';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AchievementService {
  constructor(
    @InjectModel(Achievement.name)
    private achievementModel: Model<Achievement>,
  ) {}

  async createDetailAchievement(createAchievementDto: CreateAchievementDto) {
    const {
      email,
      numberCorrect,
      numberWrong, // options sẽ là mảng chuỗi sau khi xử lý trong DTO
      duration_minutes,
    } = createAchievementDto;

    // Tạo câu hỏi mới trong cơ sở dữ liệu
    const question = await this.achievementModel.create({
      email,
      numberCorrect,
      numberWrong, // options đã là mảng chuỗi
      duration_minutes,
    });

    return {
      _id: question._id,
    };
  }

  async editDetailAchievement(updateAchievementDto: UpdateAchievementDto) {
    return await this.achievementModel.updateOne(
      {
        _id: updateAchievementDto._id,
      },
      { ...updateAchievementDto },
    );
  }

  async deleteDetailAchievement(updateAchievementDto: UpdateAchievementDto) {
    const { _id } = updateAchievementDto;
    // Check if the provided ID is valid
    if (!mongoose.isValidObjectId(_id)) {
      throw new BadRequestException('Invalid or empty ID format');
    }

    const data = await this.achievementModel.findOne({ _id });

    if (data) {
      // Delete the document and return the result (or just the deleted data)
      await this.achievementModel.deleteOne({ _id });
      return { message: 'Document successfully deleted' };
    } else {
      throw new BadRequestException('Id không tồn tại');
    }
  }
}
