import {TasksType} from "../App";
import React from "react";

type TasksPropsType = {
    tasks: TasksType
    setTask: (el: TasksType) => void
}

const Tasks: React.FC<TasksPropsType> = (props) => {

    return <div>
        {props.tasks.map(t => {

            const DeleteTask = (id: string) => {
                let NewTasks = props.tasks.filter(t => t.id !== id)
                return props.setTask(NewTasks)
            }

            return (
                <li key={t.id}><input type={"checkbox"} checked={t.status}/>{t.title}
                    <button onClick={() => DeleteTask(t.id)}>X</button>
                </li>
            )
        })}
    </div>
}


export default Tasks