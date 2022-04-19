import { useState } from "react";
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TaskDiv, Task, Input } from "../styles";

const Todo = ({ title, description, id, removeTodo, updateTodo, completed }) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newValueDescription, setNewValueDescription] = useState(description);


  return (
    <TaskDiv>
      <Task onClick={()=>updateTodo(id, { title: newTitle, description: newValueDescription, completed: !completed })}>
        {edit ? (
          <Input
            type="text"
            name="title"
            id="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          completed ? <h1 style={{textDecoration: 'line-through'}}>{title}</h1> : <h1>{title}</h1>
        )}
        {edit ? (
          <Input
            autoFocus
            type="text"
            name="description"
            id="description"
            value={newValueDescription}
            onChange={(e) => setNewValueDescription(e.target.value)}
          />
        ) : (
          completed ? <p style={{textDecoration: 'line-through'}}>{description}</p> : <p>{description}</p>
        )}
      </Task>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(id)}
          className="delete-icon"
        />
        {edit ? (
          <RiCheckboxCircleLine
            onClick={() => {
              updateTodo(id, {
                title: newTitle,
                description: newValueDescription,
                completed: completed
              });
              setEdit(false);
            }}
          />
        ) : (
          !completed && <TiEdit className="edit-icon" onClick={() => setEdit(true)} />
        )}
      </div>
    </TaskDiv>
  );
};

export default Todo;
