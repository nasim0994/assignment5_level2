import { Schema, model } from 'mongoose';
import { IMessage } from './messageInterface';

const messageSchema = new Schema<IMessage>(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ContactMessage = model<IMessage>('ContactMessage', messageSchema);
