import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className="task">
            <p>{task.taskName}</p>
            <button type="button" onClick={() => {
                completeTask(task.taskName)
            }}>Delete</button>
        </div>
    )
}

export default TodoTask
