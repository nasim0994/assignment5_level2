import express, { NextFunction, Request, Response } from 'express';
const Router = express.Router();
import { auth } from '../../middlewares/auth';
import verifyValidate from '../../middlewares/verifyValidate';
import { fileUploader } from '../../utils/fileUploader';
import {
  projectValidation,
  updateProjectValidation,
} from './projectValidation';
import {
  createProjectController,
  deleteProjectController,
  getAllProjectController,
  getByIdProjectController,
  updateProjectController,
} from './projectController';
const upload = fileUploader('project').single('thumbnail');

Router.post(
  '/add',
  auth('admin'),
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(projectValidation),
  createProjectController,
);
Router.get('/all', getAllProjectController);
Router.get('/:id', getByIdProjectController);
Router.delete('/delete/:id', auth('admin'), deleteProjectController);
Router.put(
  '/update/:id',
  auth('admin'),
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(updateProjectValidation),
  updateProjectController,
);

export const projectRoute = Router;
