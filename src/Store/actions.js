import { SET_TODO_INPUT, ADD_TODO, DELETE_JOB, ENTER_JOB} from "./constants";
export const  setTodoInput = payload =>({
    type:SET_TODO_INPUT,
    payload
})
export const addTodo = payload =>({
    type:ADD_TODO,
    payload
})
export const deleteJob = index =>({
    type:DELETE_JOB,
    index
})
export const enterJob = payload =>({
    type:ENTER_JOB,
    payload
}) 