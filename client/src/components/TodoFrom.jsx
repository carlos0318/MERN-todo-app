import { useState } from "react";
import axios from 'axios';
import { Button, Input, Form } from "../styles";

const TodoFrom = ({fetchData}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = { title, description };
    await axios.post(`http://localhost:5000/`, todo);
    fetchData();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter a title..."
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Enter a description..."
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TodoFrom;
