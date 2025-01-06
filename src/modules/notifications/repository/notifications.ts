import models from '../../../database/models';
import { NotificationInterface } from './../../../database/interfaces/index';

const createNotification = async (body: NotificationInterface): Promise<NotificationInterface> => {
    return await models.Notification.create(body);
};

const getNotifications = async (): Promise<NotificationInterface | []> => {
    return await models.Notification.findAll();
};

const updateNotification = async (): Promise<void> => {
    await models.Notification.update({ isRead: true }, { where: { isRead: false } });
    return await models.Notification.findAll();
};

export default { createNotification, getNotifications, updateNotification };