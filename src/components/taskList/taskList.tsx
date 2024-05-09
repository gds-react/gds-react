import React from 'react';
import Tag from '../tag/tag';
import { TaskListProps, TaskListType } from './taskList.types';
import { classBuilder } from '../../component-helpers';

import './taskList.scss';

const TaskList: TaskListType = ({ classBlock, taskList, name }: TaskListProps) => {
    const classes = classBuilder('penultimate-task-list', classBlock || 'govuk-task-list', undefined, undefined);
    return taskList && taskList.length > 0 ? <ul className={classes()}>
        {
            taskList.map((task, index) => {
                return <li className={classes('item', 'with-link')} key={index}>
                    <div className={classes('name-and-hint')}>
                        <a className={"govuk-link govuk-task-list__link"} href={task.href || ''} aria-describedby={`${task.hint ? `${name}-task-details-${index + 1}-hint` : ''} ${name}-task-details-${index + 1}-status`}>
                            {task.label}
                        </a>
                        {task.hint ? <div id={`${name}-task-details-${index + 1}-hint`} className={classes('hint')}>
                            {task.hint}
                        </div>
                            : <React.Fragment></React.Fragment>}
                    </div>
                    <div className={classes('status')} id={`${name}-task-details-${index + 1}-status`}>
                        {task.status === 'Completed' ? task.status : <Tag classModifiers={task.statusColor}>{task.status}</Tag>}
                    </div>
                </li>
            })
        }
    </ul >
        : <React.Fragment></React.Fragment>
}
export default TaskList;
