import express, { NextFunction, Request, Response } from 'express';
const Router = express.Router();
import { auth } from '../../middlewares/auth';
import verifyValidate from '../../middlewares/verifyValidate';
import { fileUploader } from '../../utils/fileUploader';
import {
  createBlogController,
  deleteBlogController,
  getAllBlogController,
  getByIdBlogController,
  updateBlogController,
} from './blogController';
import { blogValidation, updateBlogValidation } from './blogValidation';
const upload = fileUploader('blog').single('thumbnail');

Router.post(
  '/add',
  auth('admin'),
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(blogValidation),
  createBlogController,
);
Router.get('/all', getAllBlogController);
Router.get('/:id', getByIdBlogController);
Router.delete('/delete/:id', auth('admin'), deleteBlogController);
Router.put(
  '/update/:id',
  auth('admin'),
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(updateBlogValidation),
  updateBlogController,
);

export const blogRoute = Router;
