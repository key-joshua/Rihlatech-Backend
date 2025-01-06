"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, dataTypes) => {
    class Notification extends sequelize_1.Model {
        static associate(models) {
            Notification.belongsTo(models.Stage, { as: 'ToStage', foreignKey: 'toStage', onDelete: 'SET NULL' });
            Notification.belongsTo(models.Stage, { as: 'FromStage', foreignKey: 'fromStage', onDelete: 'SET NULL' });
        }
    }
    Notification.init({
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
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Notification',
        tableName: 'Notification',
    });
    return Notification;
};
//# sourceMappingURL=Notification.js.map