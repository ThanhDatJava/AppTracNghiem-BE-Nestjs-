// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

// export type QuestionDocument = HydratedDocument<Question>;

// @Schema({ timestamps: true })
// export class Question {
//   @Prop()
//   category: string;
//   @Prop()
//   question_text: string;
//   @Prop()
//   options: string;
//   @Prop()
//   correct_answer: string;
//   @Prop()
//   explanation: string;
//   @Prop()
//   difficulty_level: string;
//   @Prop()
//   image: string;
// }

// export const QuestionSchema = SchemaFactory.createForClass(Question);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema({ timestamps: true })
export class Question {
  @Prop()
  category: string;

  @Prop()
  question_text: string;

  // Đổi kiểu từ string thành mảng chuỗi (string[])
  @Prop({ type: [String] })
  options: string[];

  @Prop()
  correct_answer: string;

  @Prop()
  explanation: string;

  @Prop()
  difficulty_level: string;

  @Prop()
  image: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
