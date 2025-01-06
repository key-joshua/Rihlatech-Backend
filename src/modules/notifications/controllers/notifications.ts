import StatusCodes from 'http-status-codes';
import notificationRepository from '../repository/notifications';

const createNotification = async (req, res) => {
    try {
        const notification = await notificationRepository.createNotification(req.body);
        return res
        .status(StatusCodes.CREATED)
        .json({ status: StatusCodes.CREATED, message: 'Success.' , data: { notification } });
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

const getNotifications = async (req, res) => {
    try {
        const notifications = await notificationRepository.getNotifications();
        return res
        .status(StatusCodes.OK)
        .json({ status: StatusCodes.OK, message: 'Success.' , data: { notifications } });
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

const updateNotification = async (req, res) => {
    try {
        const notifications = await notificationRepository.updateNotification();
        return res
        .status(StatusCodes.OK)
        .json({ status: StatusCodes.OK, message: 'Success.', data: { notifications } });
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

export default { createNotification, getNotifications, updateNotification };
