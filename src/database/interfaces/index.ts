import { Sequelize, Dialect } from "sequelize";

export interface DBInterface {
	[key: string]: any;
	sequelize: Sequelize;
	Sequelize: typeof Sequelize;
}
export interface DBConfigInterface {
	url?: string;
	host: string;
	dialect: Dialect;
	storage?: string;
	username: string;
	password: string;
	database: string;
	logging?: boolean | ((sql: string, timing?: number) => void);
}

export interface TaskInterface {
    id?: string;
    stageId: string;
    tag: string;
    title: string;
    dueDate: Date;
    assignee: string;
    description: string;
    priority: 'Low' | 'Medium' | 'High';
    created_at?: Date;
    updated_at?: Date;
}

export interface StageInterface {
    id?: string;
    title: string;
    description?: string;
    isCollapsed?: boolean;
    created_at?: Date;
    updated_at?: Date;
}

export interface NotificationInterface {
    id?: string;
    isRead: boolean;
    message: string;
    timestamp: Date;
    toStage?: string;
    taskTitle?: string;
    fromStage?: string;
    type: 'TASK_MOVED' | 'TASK_ASSIGNED' | 'STATUS_UPDATE';
    created_at?: Date;
    updated_at?: Date;
}
  