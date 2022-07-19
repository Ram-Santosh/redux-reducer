import { useContext } from "react";
import { countContext } from "./App";

export default function IncreaseCounter () {
    var [reduce, dispatch] = useContext(countContext);

    var handleInc = () => {
        dispatch({type: "Increment"});
    }
  
    var handleDec = () => {
        dispatch({type: "Decrement"});
    }
  
    var handleRe = () => {
        dispatch({type: "Reset"});
    }
    
    return (
        <>
        {reduce.counter}<br/><br/>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleRe}>Reset</button>
        </>
    )
}