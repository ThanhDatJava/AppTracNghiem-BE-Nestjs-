import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema({ timestamps: true })
export class Question {
  @Prop()
  question_text: string;

  // Đổi kiểu từ string thành mảng chuỗi (string[])
  @Prop({ type: [String] })
  options: string[];

  @Prop()
  correct_answer: string;

  @Prop()
  image: string;

  @Prop({ type: [String] })
  _id_quiz: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
