import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import Tasks from "./Tasks/Tasks";
import Input from "./Input/Input";
import Button from "./Button/Button";
import tasks from "./Tasks/Tasks";

type TaskType = {
    id: string
    title: string
    status: boolean
}
export type TasksType = Array<TaskType>
type ChangeTasksType = 'all' | 'true' | 'false'





function App() {

    const [task,setTask] = useState<TasksType>([{id: v1(), title: 'JS', status: true},
        {id: v1(), title: 'React', status: false},
        {id: v1(), title: 'Html', status: true},
        {id: v1(), title: 'Css', status: true},
        {id: v1(), title: 'Redux', status: false}
    ])
   let [filter,setFilter] = useState<ChangeTasksType>('all')
    let [filterInput,setFilterInput] = useState('')

  const ChangeFilter = (name:ChangeTasksType) => {
       setFilter(name)
  }

  let filteredTask = task
  const filterTasks = (filter:ChangeTasksType,task:TasksType,filteredTask:TasksType):TasksType => {
      if (filter === 'true') {
          return filteredTask =  task.filter(el => el.status)
      } else if (filter === 'false') {
          return filteredTask =  task.filter(el => !el.status)
      } else return filteredTask
  }

    filteredTask = filterTasks(filter,task,filteredTask)

  /////////////////////////////////////////////////////////////////////////////////

  const AddTask = () => {
        let NewTask = [{id: v1(), title: filterInput, status: false},...task]
        setTask(NewTask)
        setFilterInput('')
  }


    return (
        <div className="App">
            <Input setFilterInput={setFilterInput} filterInput={filterInput} callback={AddTask}/>
            <Button name={'Add Task'} callback={AddTask}/>
            <Tasks setTask={setTask} tasks={filteredTask}/>
            <Button name={'All'} callback={() => {
                ChangeFilter('all')
            }} />
            <Button name={'Complited'} callback={() => {
                ChangeFilter('true')
            }}/>
            <Button name={'In Work'} callback={() => {
                ChangeFilter('false')
            }}/>

        </div>
    );
}

export default App
