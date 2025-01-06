
import { Router } from 'express';
import tasksRoute from './tasks';
import stagesRoute from './stages';
import notificationsRoute from './notifications';

const router: Router = Router();

router.use('/tasks', tasksRoute);
router.use('/stages', stagesRoute);
router.use('/notifications', notificationsRoute);

export default router;
