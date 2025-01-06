"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable('Notification', {
            id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, allowNull: false, primaryKey: true, comment: 'The unique identifier for the notification.', },
            taskTitle: { type: sequelize_1.DataTypes.STRING, allowNull: true, comment: 'The title of the task related to the notification.', },
            isRead: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: false, defaultValue: false, comment: 'Indicates whether the notification has been read.', },
            message: { type: sequelize_1.DataTypes.TEXT, allowNull: false, comment: 'The content of the notification.', },
            timestamp: { type: sequelize_1.DataTypes.DATE, allowNull: false, defaultValue: sequelize_1.DataTypes.NOW, comment: 'The timestamp of when the notification was created.', },
            toStage: { type: sequelize_1.DataTypes.UUID, allowNull: true, comment: 'The ID of the stage the notification is directed to.', },
            fromStage: { type: sequelize_1.DataTypes.UUID, allowNull: true, comment: 'The ID of the stage the notification originated from.', },
            type: { type: sequelize_1.DataTypes.STRING, allowNull: false, comment: 'The type of notification.', },
            created_at: { allowNull: false, type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW, comment: 'The date and time the notification was created.', },
            updated_at: { allowNull: false, type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW, comment: 'The date and time the notification was last updated.', },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Notification');
    },
};
//# sourceMappingURL=20250105153208-create-notification.js.map