import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoFrom from "./components/TodoFrom";
import axios from 'axios';
import { Container, ContainerTodo, Title } from "./styles";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:5000/");
    setTodos(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <ContainerTodo>
        <Title>What's the plan for Today?</Title>
        <TodoFrom fetchData={fetchData} />
        <TodoList todos={todos} fetchData={fetchData}/>
      </ContainerTodo>
    </Container>
  );
}

export default App;
