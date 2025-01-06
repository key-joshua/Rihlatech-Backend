"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable('Stage', {
            id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, allowNull: false, primaryKey: true, comment: 'The unique identifier for the stage.', },
            title: { type: sequelize_1.DataTypes.STRING, allowNull: false, comment: 'The title of the stage.', },
            description: { type: sequelize_1.DataTypes.STRING, allowNull: false, comment: 'The description of the stage.', },
            isCollapsed: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: true, defaultValue: false, comment: 'Indicates whether the stage is collapsed or expanded.', },
            created_at: { allowNull: false, type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW, comment: 'The date and time the stage was created.', },
            updated_at: { allowNull: false, type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW, comment: 'The date and time the stage was last updated.', },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Stage');
    },
};
//# sourceMappingURL=20250104232438-create-stage.js.map