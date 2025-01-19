import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Define the type for the document
export type AchievementDocument = HydratedDocument<Achievement>;

@Schema({ timestamps: true }) // Automatically add createdAt and updatedAt fields
export class Achievement {
  @Prop() // email field - not explicitly required, but can add validation as needed
  email: string;

  @Prop() // name field - not explicitly required, but can add validation as needed
  name: string;

  @Prop() // numberCorrect field as a string (instead of a number type)
  numberCorrect: string;

  // duration_minutes as a string (could be an integer or number in the future)
  @Prop()
  duration_minutes: string;

  // If you wanted to add validation or other properties like 'required', it could be done here.
}

// Create the Mongoose schema for the Achievement class
export const AchievementSchema = SchemaFactory.createForClass(Achievement);
