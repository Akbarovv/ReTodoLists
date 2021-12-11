import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'All' | 'Active' | 'Completed'

function App() {

    const [tasks, setTasks] = useState([
        {id: v1(), title: "html", isDone: true},
        {id: v1(), title: "css", isDone: false},
        {id: v1(), title: "html", isDone: true},
    ])

    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: true}
        setTasks([newTask, ...tasks])
    }

    const removeTask = (id: string) => {
        const task = tasks.filter(t => t.id !== id)
        setTasks(task)
    }

   /* const [filter, setMyFilter] = useState<FilterValuesType>('All')

    let tasksForTodolist = tasks

    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(f => f.isDone)
    }
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(f => !f.isDone)
    }

    const setFilter = (value: FilterValuesType) => {
        setMyFilter(value)
    }*/
    return (
        <div>
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
                      // setFilter={setFilter}
                      addTask={addTask}
            />
        </div>
    )

}

export default App;
