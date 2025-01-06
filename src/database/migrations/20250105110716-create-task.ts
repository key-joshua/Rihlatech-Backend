import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Task', {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, allowNull: false, primaryKey: true, comment: 'The unique identifier for the task.', },
        stageId: { type: DataTypes.UUID , allowNull: false, comment: 'The stage ID the task belongs to.', references:{ model: 'Stage', key: 'id' }, onDelete: 'CASCADE'},
        tag: { type: DataTypes.STRING, allowNull: false, comment: 'The tag associated with the task.', },
        title: { type: DataTypes.STRING, allowNull: false, comment: 'The title of the task.', },
        dueDate: { type: DataTypes.DATE, allowNull: false, comment: 'The due date for the task.', },
        assignee: { type: DataTypes.STRING, allowNull: false, comment: 'The user assigned to the task.', },
        description: { type: DataTypes.TEXT, allowNull: false, comment: 'A detailed description of the task.', },
        priority: { type: DataTypes.STRING, allowNull: false, comment: 'The priority level of the task.', },
        created_at: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW, comment: 'The date and time the task was created.', },
        updated_at: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW, comment: 'The date and time the task was last updated.', },
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Task');
  },
};
