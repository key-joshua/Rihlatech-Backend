import { Router } from 'express';
import stageController from '../modules/stages/controllers/stages';
import validationSchema from '../modules/stages/validations/stages';
import { routeBodyValidation, routeParamsValidation } from '../middlewares/middlewares';

const router: Router = Router();

router.get('/', stageController.getStages);
router.post('/', routeBodyValidation(validationSchema.createStageSchema), stageController.createStage);
router.delete('/:id', routeParamsValidation(validationSchema.deleteStageSchema), stageController.deleteStage);

export default router;
