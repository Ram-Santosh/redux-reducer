import { createContext, useState } from "react";
import IncreaseCounter from "./IncreaseCounter";
import { useReducer } from "react";

var countContext = createContext();

const Reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return {...state, counter: state.counter + 1};
        case "Decrement":
            return {...state, counter: state.counter - 1};
        case "Reset":
            return {...state, counter: 0};
        default:
            return state;
    }
}

function App() {
  var [counter] = useState({
    counter:0
  });
  const [reduce, dispatch] = useReducer(Reducer, counter);

  return (
    <>
    <h3>Counter</h3>
    <countContext.Provider value={[reduce, dispatch]}>
      <IncreaseCounter />
    </countContext.Provider>
    </>
  );
}

export default App;
export {countContext};
