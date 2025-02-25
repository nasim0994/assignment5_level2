import express from 'express';
const Router = express.Router();
import { auth } from '../../middlewares/auth';
import verifyValidate from '../../middlewares/verifyValidate';
import {
  createMessageController,
  deleteMessageController,
  getAllMessageController,
  getByIdMessageController,
} from './messageController';
import { messageValidation } from './messageValidation';

Router.post('/add', verifyValidate(messageValidation), createMessageController);
Router.get('/all', auth('admin'), getAllMessageController);
Router.get('/:id', auth('admin'), getByIdMessageController);
Router.delete('/delete/:id', auth('admin'), deleteMessageController);

export const messageRoute = Router;
