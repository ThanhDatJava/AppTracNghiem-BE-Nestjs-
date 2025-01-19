import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuizDocument = HydratedDocument<Quiz>;

@Schema({ timestamps: true })
export class Quiz {
  @Prop()
  quiz_name: string;

  @Prop()
  description: string;

  // Đổi kiểu từ string thành mảng chuỗi (string[])
  @Prop({ type: [String] })
  questions: string[];

  @Prop()
  duration_minutes: string;

  @Prop()
  image: string;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
