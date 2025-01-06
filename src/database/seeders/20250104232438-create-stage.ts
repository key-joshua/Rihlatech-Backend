import { QueryInterface } from 'sequelize';

const stageOne = {
  id: 'f84ac10b-58cc-4372-a567-0e02b2c3d83f',
  title: 'Backlog',
  description: 'Tasks waiting to be processed.',
  isCollapsed: false,
  created_at: new Date(),
  updated_at: new Date(),
};

const stageTwo = {
  id: 'f84ac10b-58cc-4372-a567-0e02b2c3d68f',
  title: 'In Progress',
  description: 'Tasks currently being worked on.',
  isCollapsed: false,
  created_at: new Date(),
  updated_at: new Date(),
};

const stageThree = {
  id: 'f84ac10b-58cc-4372-a567-0e02b2c3d28f',
  title: 'Completed',
  description: 'Tasks that have been completed.',
  isCollapsed: false,
  created_at: new Date(),
  updated_at: new Date(),
};

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert('Stage', [stageOne, stageTwo, stageThree]);

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('Stage', {}, {});
