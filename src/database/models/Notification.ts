import { NotificationInterface } from '../interfaces';
import { Sequelize, Model, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Notification extends Model<NotificationInterface> implements NotificationInterface {
    declare id: string;
    declare taskTitle: string;
    declare isRead: boolean;
    declare message: string;
    declare timestamp: Date;
    declare toStage: string;
    declare fromStage: string;
    declare type: 'TASK_MOVED' | 'TASK_ASSIGNED' | 'STATUS_UPDATE';
    declare created_at: Date;
    declare updated_at: Date;

    static associate(models) {
      Notification.belongsTo(models.Stage, { as: 'ToStage', foreignKey: 'toStage', onDelete: 'SET NULL' });
      Notification.belongsTo(models.Stage, { as: 'FromStage', foreignKey: 'fromStage', onDelete: 'SET NULL' });
    }
  }

  Notification.init(
    {
      id: { type: dataTypes.UUID, defaultValue: dataTypes.UUIDV4, allowNull: false, primaryKey: true, comment: 'The unique identifier for the notification.' },
      taskTitle: { type: dataTypes.STRING, allowNull: true, comment: 'The title of the task associated with the notification.' },
      isRead: { type: dataTypes.BOOLEAN, allowNull: false, defaultValue: false, comment: 'Indicates if the notification has been read.' },
      message: { type: dataTypes.TEXT, allowNull: false, comment: 'The notification message.' },
      timestamp: { type: dataTypes.DATE, allowNull: false, comment: 'The timestamp when the notification was created.' },
      toStage: { type: dataTypes.UUID, allowNull: true, comment: 'The stage ID the notification is directed to.' },
      fromStage: { type: dataTypes.UUID, allowNull: true, comment: 'The stage ID the notification originated from.' },
      type: { type: dataTypes.STRING, allowNull: false, comment: 'The type of the notification.' },
      created_at: { type: dataTypes.DATE, allowNull: false, defaultValue: dataTypes.NOW },
      updated_at: { type: dataTypes.DATE, allowNull: false, defaultValue: dataTypes.NOW },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Notification',
      tableName: 'Notification',
    }
  );

  return Notification;
};
