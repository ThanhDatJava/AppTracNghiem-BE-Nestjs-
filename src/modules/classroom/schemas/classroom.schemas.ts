import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClassroomDocument = HydratedDocument<Classroom>;

@Schema({ timestamps: true })
export class Classroom {
  @Prop()
  name_classroom: string;

  @Prop()
  _id_teacher: string;

  @Prop({ type: [String] })
  _id_student: string[];

  @Prop({ type: [String] })
  _id_quiz: string[];

  @Prop()
  image: string;
}

export const ClassroomSchema = SchemaFactory.createForClass(Classroom);
