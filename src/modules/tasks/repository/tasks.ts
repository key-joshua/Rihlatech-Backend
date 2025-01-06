import models from '../../../database/models';
import { TaskInterface } from '../../../database/interfaces';

const createTask = async (body: TaskInterface): Promise<TaskInterface> => {
    return await models.Task.create(body);
};

const getTasks = async (): Promise<TaskInterface | []> => {
    return await models.Task.findAll();
};

const updateTask = async (id, attribute): Promise<void> => {
    await models.Task.update(attribute, { where: { id } });
};

const deleteTask = async (attribute) => {
    return await models.Task.destroy({ where: attribute });
};

export default { createTask, getTasks, updateTask, deleteTask };