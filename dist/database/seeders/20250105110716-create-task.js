"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const taskOne = {
    id: 'f0f6bb9c-d7e7-4a65-9788-2e20b7e19ae1',
    stageId: 'f84ac10b-58cc-4372-a567-0e02b2c3d83f', // Backlog
    tag: 'Bug',
    title: 'Fix login issue',
    dueDate: new Date('2025-01-10'),
    assignee: 'John Doe',
    description: 'Resolve the bug causing login failures.',
    priority: 'High',
    created_at: new Date(),
    updated_at: new Date(),
};
const taskTwo = {
    id: 'e64b5f3a-83e8-4bcb-9b55-9d9b53a1cfd7',
    stageId: 'f84ac10b-58cc-4372-a567-0e02b2c3d68f', // In Progress
    tag: 'Feature',
    title: 'Implement dark mode',
    dueDate: new Date('2025-01-15'),
    assignee: 'Jane Smith',
    description: 'Add dark mode to the application.',
    priority: 'Medium',
    created_at: new Date(),
    updated_at: new Date(),
};
const taskThree = {
    id: 'f7b284c9-c37f-491c-8c0e-2b6a0f37e7f6',
    stageId: 'f84ac10b-58cc-4372-a567-0e02b2c3d28f', // Completed
    tag: 'Enhancement',
    title: 'Optimize database queries',
    dueDate: new Date('2024-12-31'),
    assignee: 'Alice Brown',
    description: 'Improve performance by optimizing queries.',
    priority: 'Low',
    created_at: new Date(),
    updated_at: new Date(),
};
const up = (queryInterface) => queryInterface.bulkInsert('Task', [taskOne, taskTwo, taskThree]);
exports.up = up;
const down = (queryInterface) => queryInterface.bulkDelete('Task', {}, {});
exports.down = down;
//# sourceMappingURL=20250105110716-create-task.js.map