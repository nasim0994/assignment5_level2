import QueryBuilder from '../../builders/QueryBuilder';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { IProject } from './projectInterface';
import { Project } from './projectModel';
import { deleteFile } from '../../utils/deleteFile';

export const createProjectService = async (data: IProject) => {
  const result = await Project.create(data);
  return result;
};

export const getAllProjectService = async (query: Record<string, unknown>) => {
  const projectQuery = new QueryBuilder(Project.find(), query)
    .search(['name'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await projectQuery.countTotal();
  const data = await projectQuery.modelQuery;

  return {
    meta,
    data,
  };
};

export const getByIdProjectService = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

export const updateProjectService = async (
  id: string,
  data: Partial<IProject>,
) => {
  const isExist = await Project.findById(id);

  if (!isExist) {
    deleteFile(data?.thumbnail as string);
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }

  const result = await Project.findByIdAndUpdate(id, data, { new: true });

  if (result && data?.thumbnail && isExist?.thumbnail) {
    deleteFile(isExist?.thumbnail);
  }

  return result;
};

export const deleteProjectService = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  if (result?.thumbnail) deleteFile(result?.thumbnail);
  return result;
};
