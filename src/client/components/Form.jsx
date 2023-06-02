import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo, postTodo } from '../../store/slices/TodoSlice';

const Form = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const addNewTodo = async (e) => {
    e.preventDefault();

    let newTodo = {
      todo: todo,
      active:true,
    };

    try {
      const response = await dispatch(postTodo(newTodo));
      console.log('New Todo:', response.payload); 
    } catch (error) {
      console.log('Error:', error);
    }

    setTodo('');
  };

  return (
    <form onSubmit={addNewTodo}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
    </form>
  );
};

export default Form;
