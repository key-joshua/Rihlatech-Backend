"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable('Task', {
            id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, allowNull: false, primaryKey: true, comment: 'The unique identifier for the task.', },
            stageId: { type: sequelize_1.DataTypes.UUID, allowNull: false, comment: 'The stage ID the task belongs to.', references: { model: 'Stage', key: 'id' }, onDelete: 'CASCADE' },
            tag: { type: sequelize_1.DataTypes.STRING, allowNull: false, comment: 'The tag associated with the task.', },
            title: { type: sequelize_1.DataTypes.STRING, allowNull: false, comment: 'The title of the task.', },
            dueDate: { type: sequelize_1.DataTypes.DATE, allowNull: false, comment: 'The due date for the task.', },
            assignee: { type: sequelize_1.DataTypes.STRING, allowNull: false, comment: 'The user assigned to the task.', },
            description: { type: sequelize_1.DataTypes.TEXT, allowNull: false, comment: 'A detailed description of the task.', },
            priority: { type: sequelize_1.DataTypes.STRING, allowNull: false, comment: 'The priority level of the task.', },
            created_at: { allowNull: false, type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW, comment: 'The date and time the task was created.', },
            updated_at: { allowNull: false, type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW, comment: 'The date and time the task was last updated.', },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Task');
    },
};
//# sourceMappingURL=20250105110716-create-task.js.map