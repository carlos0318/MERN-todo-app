import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";
import { TodosContainer } from "../styles";

const TodoList = ({ todos, fetchData }) => {
  const removeTodo = async (id) => {
    await axios.delete(`http://localhost:5000/${id}`);
    fetchData();
  };

  const updateTodo = async (id, newValue) => {
    await axios.put(`http://localhost:5000/${id}`, newValue);
    fetchData();
  };

  return (
    <TodosContainer>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          title={todo.title}
          description={todo.description}
          id={todo._id}
          completed={todo.completed}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </TodosContainer>
  );
};

export default TodoList;
