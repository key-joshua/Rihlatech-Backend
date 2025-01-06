import models from '../../../database/models';
import { StageInterface } from '../../../database/interfaces';

const createStage = async (body: StageInterface): Promise<StageInterface> => {
    return await models.Stage.create(body);
};

const getStages = async (): Promise<StageInterface | []> => {
    return await models.Stage.findAll({ order: [['created_at', 'ASC']] });
};

const deleteStage = async (attribute) => {
    return await models.Stage.destroy({ where: attribute });
};

export default { createStage, getStages, deleteStage };
