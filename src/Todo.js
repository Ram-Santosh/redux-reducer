import { useEffect, useState } from "react";
import { isCompleted, store } from "./Activity-3";
import { addItems } from "./Activity-3";
import { useSelector } from 'react-redux';

export default function Todo () {
    var [task, setTask] = useState("");
    var [allTasks, setAllTasks] = useState([]);
    var copyRedux = useSelector((state) => state.value)

    useEffect(() => {
        setAllTasks(copyRedux);
    },[copyRedux])

    var handleInput = (e) => {
        setTask(e.target.value);
    };

    var handleAdd = () => {
        store.dispatch(addItems(task));
        setTask("");
    };

    var handleCheckbox = (e) => {
        if (e.target.checked){
            store.dispatch(isCompleted([e.target.value,true]));
        }
        else {
            store.dispatch(isCompleted([e.target.value,false]));
        }
    };

    var handleFilter = (e) => {
        var copy;
        if (e.target.name === "ALL"){
            setAllTasks(copyRedux);
        }
        else if (e.target.name === "ACTIVE"){
            copy = copyRedux.filter((task) => {
                if (!task.isCompleted){
                    return task;
                }
            })
            setAllTasks(copy);
        }
        else{
            console.log(copyRedux)
            copy = copyRedux.filter((task) => {
                if (task.isCompleted){
                    return task;
                }
            })
            console.log("after",copy)
            setAllTasks(copy);
        }
    }

    return (
        <>
            <input onChange={handleInput} value={task} placeholder="Add a Task"></input>
            <button onClick={handleAdd}>Add</button><br/>
            <button onClick={handleFilter} name="ALL">All</button>
            <button onClick={handleFilter} name="ACTIVE">Active</button>
            <button onClick={handleFilter} name="COMPLETED">Completed</button><br/><br/>
            {allTasks.map((t,id) => {
                return <>
                    <input type="checkbox" onChange={handleCheckbox} key={id} value={id+1}></input>
                    <label>&nbsp;{t.task}</label><br></br>
                </>
            })}
        </>
    );
}