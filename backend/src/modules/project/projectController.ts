import { catchAsync } from '../../utils/catchAsync';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import {
  createProjectService,
  deleteProjectService,
  getAllProjectService,
  getByIdProjectService,
  updateProjectService,
} from './projectService';
import { deleteFile } from '../../utils/deleteFile';

export const createProjectController = catchAsync(async (req, res, next) => {
  const image: string | undefined = req?.file?.filename;
  if (!image) throw new AppError(httpStatus.NOT_FOUND, 'image is required !');

  const data = {
    ...req.body,
    thumbnail: `/project/${image}`,
  };

  try {
    const result = await createProjectService(data);

    res.status(200).json({
      success: true,
      message: 'project created successfully',
      data: result,
    });
  } catch (error) {
    if (image) deleteFile(`/project/${image}`);
    next(error);
  }
});

export const getAllProjectController = catchAsync(async (req, res) => {
  const { meta, data } = await getAllProjectService(req.query);

  res.status(200).json({
    success: true,
    message: 'projects fetched successfully',
    meta,
    data,
  });
});

export const getByIdProjectController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getByIdProjectService(id);

  res.status(200).json({
    success: true,
    message: 'project fetched successfully',
    data: result,
  });
});

export const updateProjectController = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const image: string | undefined = req?.file?.filename;
  const data = {
    ...req.body,
    thumbnail: image ? `/project/${image}` : undefined,
  };
  try {
    const result = await updateProjectService(id, data);

    res.status(200).json({
      success: true,
      message: 'project updated successfully',
      data: result,
    });
  } catch (error) {
    if (image) deleteFile(`/project/${image}`);
    next(error);
  }
});

export const deleteProjectController = catchAsync(async (req, res) => {
  const { id } = req.params;
  await deleteProjectService(id);

  res.status(200).json({
    success: true,
    message: 'project deleted successfully',
  });
});
