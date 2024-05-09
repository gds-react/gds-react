import { StandardProps } from '../../component-helpers/index';

export interface Task {
    label: string;
    hint?: string;
    href?: string;
    status: string;
    statusColor?: string;
};

export type TaskListProps = StandardProps & {
    name: string;
    taskList?: Task[];
};

export interface TaskListType extends React.FC<TaskListProps> { };