import { SET_TODO_INPUT,ADD_TODO, DELETE_JOB } from "./constants";

const initState ={
    todoInput:"",
    todos:[]
}
function reducer(state,action){
    switch (action.type) {
        case SET_TODO_INPUT:
            return {...state, todoInput:action.payload}
          
        case ADD_TODO:
                return {...state, todos:[...state.todos, state.todoInput]}
        case DELETE_JOB:
            {
                state.todos.splice(action.index,1)
                return {...state, todo: [...state.todos]}
            }
        default:
            return state
    }        
} 
export {initState}  
export default reducer