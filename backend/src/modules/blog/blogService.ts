import QueryBuilder from '../../builders/QueryBuilder';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { deleteFile } from '../../utils/deleteFile';
import { IBlog } from './blogInterface';
import { Blog } from './blogModel';

export const createBlogService = async (data: IBlog) => {
  const result = await Blog.create(data);
  return result;
};

export const getAllBlogService = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .search(['name'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await blogQuery.countTotal();
  const data = await blogQuery.modelQuery;

  return {
    meta,
    data,
  };
};

export const getByIdBlogService = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

export const updateBlogService = async (id: string, data: Partial<IBlog>) => {
  const isExist = await Blog.findById(id);

  if (!isExist) {
    deleteFile(data?.thumbnail as string);
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }

  const result = await Blog.findByIdAndUpdate(id, data, { new: true });

  if (result && data?.thumbnail && isExist?.thumbnail) {
    deleteFile(isExist?.thumbnail);
  }

  return result;
};

export const deleteBlogService = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  if (result?.thumbnail) deleteFile(result?.thumbnail);
  return result;
};
