import React, { useContext, useRef } from "react";
import classses from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            alert('insert a Todo')
            return;
        }

        todoCtx.addTodo(enteredText);

        if (todoTextInputRef.current) {
            todoTextInputRef.current.value = '';
        }

    };

    return (
    <form onSubmit={submitHandler} className={classses.form}>
        <label htmlFor='text'>To Do</label>
        <input type='text' id='text' ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
    )
};

export default NewTodo