import { z } from 'zod';

export const projectValidation = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  liveLink: z.string().url('Live link must be a valid URL'),
  codeLink: z.string().url('Code link must be a valid URL'),
  tags: z.array(z.string()).optional(),
  technologies: z
    .array(z.string())
    .min(1, 'At least one technology is required'),
  featured: z.boolean().optional(),
  order: z
    .number()
    .int('Order must be an integer')
    .nonnegative('Order must be a non-negative number'),
});

export const updateProjectValidation = projectValidation.partial();
