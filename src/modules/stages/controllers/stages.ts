import StatusCodes from 'http-status-codes';
import stageRepository from '../repository/stages';

const createStage = async (req, res) => {
    try {
        const stage = await stageRepository.createStage(req.body);
        return res
        .status(StatusCodes.CREATED)
        .json({ status: StatusCodes.CREATED, message: 'Success.' , data: { stage } });
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

const getStages = async (req, res) => {
    try {
        const stages = await stageRepository.getStages();
        return res
        .status(StatusCodes.OK)
        .json({ status: StatusCodes.OK, message: 'Success.' , data: { stages } });
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

const deleteStage = async (req, res) => {
    try {
        await stageRepository.deleteStage(req.params);
        return res
        .status(StatusCodes.OK)
        .json({ status: StatusCodes.OK, message: 'Success.' });
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

export default { createStage, getStages, deleteStage };
