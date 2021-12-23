import React, {ChangeEvent, useState,KeyboardEvent} from "react";
import {FilterValuesType} from "./App";
import s from "./Todolist.module.css"

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    setFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (currentId:string,value: boolean, )=>void
}


export function Todolist(props: TodolistType) {

    const [error,setError] = useState(true)
    const [title, setTitle] = useState('')
    const addTaskHandler = () => {
        if (title.trim()){
            props.addTask(title)
            setTitle('')
            setError(true)
        }
    }
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        setError(false)
    }
    const EnterKeyPress = (event: KeyboardEvent<HTMLInputElement>)=>{
        if (event.key === "Enter"){
            addTaskHandler()
        }
    }
    const AllChangeFilter = (value: FilterValuesType)=>{
        props.setFilter(value)
    }
    const removeTask = (mId: string) => {
        props.removeTask(mId)
    }
    /*const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>)=>{
        props.changeStatus(, e.currentTarget.checked)
    }*/
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={title} onChange={onChangeInput} onKeyPress={EnterKeyPress}/>
                    <button onClick={addTaskHandler}>+</button>
                    {error && <div className={s.errorMessage}>title is required</div>}
                </div>
                <ul>
                    {
                        props.tasks.map(m => <li key={m.id}>
                                <button onClick={()=>removeTask(m.id)}>x</button>
                                <input type="checkbox" checked={m.isDone} onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                                    props.changeStatus(m.id, e.currentTarget.checked)
                                }}/>
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

