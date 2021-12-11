import React, {ChangeEvent, KeyboardEvent, useState} from 'react'

type FullInput = {
    addTask: (title: string) => void

}

export function FullInput({addTask, ...props}: FullInput){

    const [title, setTitle] = useState('')
    const addTaskHandler = () => {
        addTask(title)
        setTitle('')
    }
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const EnterKeyPress = (event: KeyboardEvent<HTMLInputElement>)=>{
        if (event.key === "Enter"){
            addTaskHandler()
        }
    }


    return (
        <div>
            <input value={title} onChange={onChangeInput} onKeyPress={EnterKeyPress}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
    )
}