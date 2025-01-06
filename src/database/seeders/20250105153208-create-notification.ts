import { QueryInterface } from 'sequelize';

const notificationOne = {
  id: 'f7268567-89ab-cdef-0123-456789abcdef',
  isRead: false,
  message: 'Task "Fix login issue" has been assigned to you.',
  timestamp: new Date(),
  toStage: 'f84ac10b-58cc-4372-a567-0e02b2c3d68f', // In Progress
  taskTitle: 'Fix login issue',
  fromStage: 'f84ac10b-58cc-4372-a567-0e02b2c3d83f', // Backlog
  type: 'TASK_ASSIGNED',
  created_at: new Date(),
  updated_at: new Date(),
};

const notificationTwo = {
  id: 'a12b4567-89ab-cdef-1234-567890abcdef',
  isRead: true,
  message: 'Task "Implement dark mode" has been moved to "In Progress".',
  timestamp: new Date(),
  toStage: 'f84ac10b-58cc-4372-a567-0e02b2c3d68f', // In Progress
  taskTitle: 'Implement dark mode',
  fromStage: 'f84ac10b-58cc-4372-a567-0e02b2c3d83f', // Backlog
  type: 'TASK_MOVED',
  created_at: new Date(),
  updated_at: new Date(),
};

const notificationThree = {
  id: 'c34d5678-90ab-cdef-2345-678901abcdef',
  isRead: false,
  message: 'Status update: Task "Optimize database queries" is now completed.',
  timestamp: new Date(),
  toStage: 'f84ac10b-58cc-4372-a567-0e02b2c3d28f', // Completed
  taskTitle: 'Optimize database queries',
  fromStage: 'f84ac10b-58cc-4372-a567-0e02b2c3d68f', // In Progress
  type: 'STATUS_UPDATE',
  created_at: new Date(),
  updated_at: new Date(),
};

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert('Notification', [notificationOne, notificationTwo, notificationThree]);

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('Notification', {}, {});
