import { Schema, model } from 'mongoose';
import { IProject } from './projectInterface';

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
    codeLink: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    technologies: {
      type: [String],
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Project = model<IProject>('Project', projectSchema);
