import StatusCodes from 'http-status-codes';
import taskRepository from '../repository/tasks';

const createTask = async (req, res) => {
    try {
        const task = await taskRepository.createTask(req.body);
        return res
        .status(StatusCodes.CREATED)
        .json({ status: StatusCodes.CREATED, message: 'Success.' , data: { task } });
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await taskRepository.getTasks();
        return res
        .status(StatusCodes.OK)
        .json({ status: StatusCodes.OK, message: 'Success.' , data: { tasks } });
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await taskRepository.updateTask(req.params.id, req.body);
        return res
        .status(StatusCodes.OK)
        .json({ status: StatusCodes.OK, message: 'Success.', data: { task } });
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

const deleteTask = async (req, res) => {
    try {
        await taskRepository.deleteTask(req.params);
        return res
        .status(StatusCodes.OK)
        .json({ status: StatusCodes.OK, message: 'Success.' });
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

export default { createTask, getTasks, updateTask, deleteTask };
