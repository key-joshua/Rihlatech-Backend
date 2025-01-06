import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Notification', {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, allowNull: false, primaryKey: true, comment: 'The unique identifier for the notification.', },
      taskTitle: { type: DataTypes.STRING, allowNull: true, comment: 'The title of the task related to the notification.', },
      isRead: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false, comment: 'Indicates whether the notification has been read.', },
      message: { type: DataTypes.TEXT, allowNull: false, comment: 'The content of the notification.', },
      timestamp: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW, comment: 'The timestamp of when the notification was created.', },
      toStage: { type: DataTypes.UUID, allowNull: true, comment: 'The ID of the stage the notification is directed to.', },
      fromStage: { type: DataTypes.UUID, allowNull: true, comment: 'The ID of the stage the notification originated from.', },
      type: { type: DataTypes.STRING, allowNull: false, comment: 'The type of notification.', },
      created_at: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW, comment: 'The date and time the notification was created.', },
      updated_at: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW, comment: 'The date and time the notification was last updated.', },
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Notification');
  },
};
