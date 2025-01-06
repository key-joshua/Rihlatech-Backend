import { StageInterface } from '../interfaces';
import { Sequelize, Model, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Stage extends Model<StageInterface> implements StageInterface {
    declare id: string;
    declare title: string;
    declare description: string;
    declare isCollapsed: boolean;
    declare created_at: Date;
    declare updated_at: Date;

    static associate(models) {
      Stage.hasMany(models.Task, { as: 'Task', foreignKey: 'stageId', onDelete: 'CASCADE' });
    }
  }

  Stage.init(
    {
      id: { type: dataTypes.UUID, defaultValue: dataTypes.UUIDV4, allowNull: false, primaryKey: true, comment: 'The unique identifier for the stage.' },
      title: { type: dataTypes.STRING, allowNull: false, comment: 'The name of the stage.' },
      description: { type: dataTypes.TEXT, allowNull: true, comment: 'A description of the stage.' },
      isCollapsed: { type: dataTypes.BOOLEAN, allowNull: true, defaultValue: false, comment: 'Indicates whether the stage is collapsed or expanded.', },
      created_at: { type: dataTypes.DATE, allowNull: false, defaultValue: dataTypes.NOW, comment: 'The date and time the stage was created.' },
      updated_at: { type: dataTypes.DATE, allowNull: false, defaultValue: dataTypes.NOW, comment: 'The date and time the stage was last updated.' },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Stage',
      tableName: 'Stage',
    }
  );

  return Stage;
};
