import { Router } from 'express';
import taskController from '../modules/tasks/controllers/tasks';
import validationSchema from '../modules/tasks/validations/tasks';
import { routeBodyValidation, routeParamsValidation } from '../middlewares/middlewares';

const router: Router = Router();

router.get('/', taskController.getTasks);
router.post('/', routeBodyValidation(validationSchema.createTaskSchema), taskController.createTask);
router.delete('/:id', routeParamsValidation(validationSchema.updateDeleteTaskSchema), taskController.deleteTask);
router.patch('/:id', routeParamsValidation(validationSchema.updateDeleteTaskSchema), routeBodyValidation(validationSchema?.updateTaskSchema), taskController.updateTask);

export default router;
