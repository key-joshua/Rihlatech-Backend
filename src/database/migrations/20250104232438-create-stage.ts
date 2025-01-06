import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Stage', {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, allowNull: false, primaryKey: true, comment: 'The unique identifier for the stage.', },
      title: { type: DataTypes.STRING, allowNull: false, comment: 'The title of the stage.', },
      description: { type: DataTypes.STRING, allowNull: false, comment: 'The description of the stage.', },
      isCollapsed: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false, comment: 'Indicates whether the stage is collapsed or expanded.', },
      created_at: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW, comment: 'The date and time the stage was created.', },
      updated_at: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW, comment: 'The date and time the stage was last updated.', }, });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Stage');
  },
};
