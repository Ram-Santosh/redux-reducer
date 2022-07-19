import { configureStore, createSlice } from "@reduxjs/toolkit"; 

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: []
    },
    reducers: {
        addItems: (state, action) => {
            var task = {"task":action.payload, "isCompleted":false, "id":state.value.length + 1};
            state.value.push(task);
        },
        isCompleted: (state, action) => {
            state.value = state.value.map((task) => {
                if (task.id.toString() === action.payload[0]) {
                    task["isCompleted"] = action.payload[1];
                    return task;
                }
                return task;
            })
        }
    }
})

export const {addItems, isCompleted} = todoSlice.actions;

const store = configureStore({
    reducer: todoSlice.reducer
});

export {store};