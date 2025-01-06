import { Router } from 'express';
import { routeBodyValidation } from '../middlewares/middlewares';
import validationSchema from '../modules/notifications/validations/notifications';
import notificationController from '../modules/notifications/controllers/notifications';

const router: Router = Router();

router.get('/', notificationController.getNotifications);
router.patch('/', notificationController.updateNotification);
router.post('/', routeBodyValidation(validationSchema.createNotificationSchema), notificationController.createNotification);

export default router;
