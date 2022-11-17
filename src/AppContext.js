import { useStore, actions } from "./Store";
import { useRef } from "react";
function AppContext() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();
  console.log(todoInput);
  const HandleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
    inputRef.current.focus();
  };

  return (
    <>
      <input
      
        ref={inputRef}
        style={{ margin: "50px 10px" }}
        value={todoInput}
        placeholder="Enter...."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
        onKeyUp={(e) => {
          e.code === "Enter" && HandleAdd();
        }}
      />
      <button onClick={HandleAdd}>ADD TASK</button>
      <ul>
        {todos.map((job, index) => (
          <li key={index}>
            {job}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(actions.deleteJob(index))}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
export default AppContext;
