import { catchAsync } from '../../utils/catchAsync';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import {
  createBlogService,
  deleteBlogService,
  getAllBlogService,
  getByIdBlogService,
  updateBlogService,
} from './blogService';
import { deleteFile } from '../../utils/deleteFile';
import { makeSlug } from '../../utils/makeSlug';

export const createBlogController = catchAsync(async (req, res, next) => {
  const image: string | undefined = req?.file?.filename;
  if (!image) throw new AppError(httpStatus.NOT_FOUND, 'image is required !');

  const data = {
    ...req.body,
    thumbnail: `/blog/${image}`,
    slug: makeSlug(req?.body?.title),
  };

  try {
    const result = await createBlogService(data);

    res.status(200).json({
      success: true,
      message: 'blog created successfully',
      data: result,
    });
  } catch (error) {
    if (image) deleteFile(`/blog/${image}`);
    next(error);
  }
});

export const getAllBlogController = catchAsync(async (req, res) => {
  const { meta, data } = await getAllBlogService(req.query);

  res.status(200).json({
    success: true,
    message: 'blogs fetched successfully',
    meta,
    data,
  });
});

export const getByIdBlogController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getByIdBlogService(id);

  res.status(200).json({
    success: true,
    message: 'blog fetched successfully',
    data: result,
  });
});

export const updateBlogController = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const image: string | undefined = req?.file?.filename;

  const data = {
    ...req.body,
    thumbnail: image ? `/blog/${image}` : undefined,
    slug: makeSlug(req?.body?.title),
  };
  try {
    const result = await updateBlogService(id, data);

    res.status(200).json({
      success: true,
      message: 'blog updated successfully',
      data: result,
    });
  } catch (error) {
    if (image) deleteFile(`/blog/${image}`);
    next(error);
  }
});

export const deleteBlogController = catchAsync(async (req, res) => {
  const { id } = req.params;
  await deleteBlogService(id);

  res.status(200).json({
    success: true,
    message: 'blog deleted successfully',
  });
});
