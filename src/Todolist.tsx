import React, {ChangeEvent, useState,KeyboardEvent} from "react";
import {FilterValuesType} from "./App";
import {v1} from "uuid";
import {FullInput} from "./FullInput";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    //setFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}


export function Todolist(props: TodolistType) {

    const [filter, setMyFilter] = useState<FilterValuesType>('All')
    let tasksForTodolist = props.tasks
    if (filter === 'Active') {
        tasksForTodolist = props.tasks.filter(f => f.isDone)
    }
    if (filter === 'Completed') {
        tasksForTodolist = props.tasks.filter(f => !f.isDone)
    }
    const setFilter = (value: FilterValuesType) => {
        setMyFilter(value)
    }
    /*const [title, setTitle] = useState('')
    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }*/
   /* const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const EnterKeyPress = (event: KeyboardEvent<HTMLInputElement>)=>{
        if (event.key === "Enter"){
            addTaskHandler()
        }
    }*/
    const AllChangeFilter = (value: FilterValuesType)=>{
        setFilter(value)
    }
    const removeTask = (mId: string) => {
        props.removeTask(mId)
    }
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <FullInput addTask={props.addTask}/>
                <ul>
                    {
                        tasksForTodolist.map(m => <li key={m.id}>
                                <button onClick={()=>removeTask(m.id)}>x</button>
                                <input type="checkbox" checked={m.isDone}/>
                                <span>{m.title}</span>
                            </li>
                        )}
                </ul>
                <div>
                    <button onClick={() => AllChangeFilter('All')}>All
                    </button>
                    <button onClick={() => AllChangeFilter('Active')}>Active
                    </button>
                    <button onClick={() => AllChangeFilter('Completed')}>Completed
                    </button>
                </div>
            </div>
        </div>
    )
}

