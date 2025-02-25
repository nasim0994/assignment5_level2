import { catchAsync } from '../../utils/catchAsync';
import {
  createMessageService,
  deleteMessageService,
  getAllMessageService,
  getByIdMessageService,
} from './messageService';

export const createMessageController = catchAsync(async (req, res, next) => {
  try {
    const result = await createMessageService(req.body);

    res.status(200).json({
      success: true,
      message: 'message created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

export const getAllMessageController = catchAsync(async (req, res) => {
  const { meta, data } = await getAllMessageService(req.query);

  res.status(200).json({
    success: true,
    message: 'message fetched successfully',
    meta,
    data,
  });
});

export const getByIdMessageController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getByIdMessageService(id);

  res.status(200).json({
    success: true,
    message: 'message fetched successfully',
    data: result,
  });
});

export const deleteMessageController = catchAsync(async (req, res) => {
  const { id } = req.params;
  await deleteMessageService(id);

  res.status(200).json({
    success: true,
    message: 'message deleted successfully',
  });
});
