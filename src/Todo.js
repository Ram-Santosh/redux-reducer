import { useState } from "react";
import { store } from "./Activity-3";
import { addItems } from "./Activity-3";
import { useSelector } from 'react-redux';

export default function Todo () {
    var [task, setTask] = useState("");
    var [allTasks, setAllTasks] = useState([]);
    var defaultTaskList = [];

    var handleInput = (e) => {
        setTask(e.target.value);
    };

    var handleAdd = () => {
        store.dispatch(addItems(task));
        store.subscribe(() => setAllTasks(store.getState().value));
        console.log(useSelector(state => state.value))
    };

    return (
        <>
            <input onChange={handleInput} placeholder="Add a Task"></input>
            <button onClick={handleAdd}>Add</button>
            {allTasks.map((t,id) => {
                return <>
                    <input type="checkbox" key={id} value={id+1}></input>
                    <label>{t.task}</label><br></br>
                </>
            }  )}
        </>
    );
}