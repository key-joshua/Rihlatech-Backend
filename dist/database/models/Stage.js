"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, dataTypes) => {
    class Stage extends sequelize_1.Model {
        static associate(models) {
            Stage.hasMany(models.Task, { as: 'Task', foreignKey: 'stageId', onDelete: 'CASCADE' });
        }
    }
    Stage.init({
        id: { type: dataTypes.UUID, defaultValue: dataTypes.UUIDV4, allowNull: false, primaryKey: true, comment: 'The unique identifier for the stage.' },
        title: { type: dataTypes.STRING, allowNull: false, comment: 'The name of the stage.' },
        description: { type: dataTypes.TEXT, allowNull: true, comment: 'A description of the stage.' },
        isCollapsed: { type: dataTypes.BOOLEAN, allowNull: true, defaultValue: false, comment: 'Indicates whether the stage is collapsed or expanded.', },
        created_at: { type: dataTypes.DATE, allowNull: false, defaultValue: dataTypes.NOW, comment: 'The date and time the stage was created.' },
        updated_at: { type: dataTypes.DATE, allowNull: false, defaultValue: dataTypes.NOW, comment: 'The date and time the stage was last updated.' },
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Stage',
        tableName: 'Stage',
    });
    return Stage;
};
//# sourceMappingURL=Stage.js.map