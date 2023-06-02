import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToDo, toggle, deleteTodo, handleCheckTodo } from "../../store/slices/TodoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoReducer);

  const changeStyle = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, active: !todo.active } : todo
    );
    dispatch(toggle(newTodos));
  };

  const removeTodo = (id) => {
    dispatch(removeToDo(id));
  };

  return (
    <ul className="todo-list">
      {todos.map((item, index) => (
        <li className={item.active ? "" : "completed"} key={index}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onClick={() => changeStyle(index)}
            />
            <label>{item.todo}</label>
            <button className="destroy" onClick={() => removeTodo(item.id)}></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
