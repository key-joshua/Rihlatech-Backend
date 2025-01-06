"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, dataTypes) => {
    class Tasks extends sequelize_1.Model {
        static associate(models) {
            Tasks.belongsTo(models.Stage, { as: 'Stage', foreignKey: 'stageId', onDelete: 'CASCADE' });
        }
    }
    Tasks.init({
        id: { type: dataTypes.UUID, defaultValue: dataTypes.UUIDV4, allowNull: false, primaryKey: true, comment: 'The unique identifier for the task.', },
        stageId: { type: dataTypes.UUID, allowNull: false, comment: 'The ID of the stage the task belongs to.', },
        tag: { type: dataTypes.STRING, allowNull: false, comment: 'The tag associated with the task.', },
        title: { type: dataTypes.STRING, allowNull: false, comment: 'The title of the task.', },
        dueDate: { type: dataTypes.DATE, allowNull: false, comment: 'The due date for the task.', },
        assignee: { type: dataTypes.STRING, allowNull: false, comment: 'The user assigned to the task.', },
        description: { type: dataTypes.TEXT, allowNull: false, comment: 'A detailed description of the task.', },
        priority: { type: dataTypes.STRING, allowNull: false, comment: 'The priority level of the task.', },
        created_at: { type: dataTypes.DATE, allowNull: false, defaultValue: dataTypes.NOW, comment: 'The date and time the task was created.', },
        updated_at: { type: dataTypes.DATE, allowNull: false, defaultValue: dataTypes.NOW, comment: 'The date and time the task was last updated.', },
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Task',
        tableName: 'Task',
    });
    return Tasks;
};
//# sourceMappingURL=Task.js.map