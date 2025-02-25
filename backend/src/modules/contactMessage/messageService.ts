import QueryBuilder from '../../builders/QueryBuilder';
import { IMessage } from './messageInterface';
import { ContactMessage } from './messageModel';

export const createMessageService = async (data: IMessage) => {
  const result = await ContactMessage.create(data);
  return result;
};

export const getAllMessageService = async (query: Record<string, unknown>) => {
  const messageQuery = new QueryBuilder(ContactMessage.find(), query)
    .search(['name'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await messageQuery.countTotal();
  const data = await messageQuery.modelQuery;

  return {
    meta,
    data,
  };
};

export const getByIdMessageService = async (id: string) => {
  const result = await ContactMessage.findById(id);
  return result;
};

export const deleteMessageService = async (id: string) => {
  const result = await ContactMessage.findByIdAndDelete(id);
  return result;
};
