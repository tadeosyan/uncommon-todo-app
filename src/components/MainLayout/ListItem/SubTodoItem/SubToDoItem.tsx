import { subToDo, useTodosActions } from "@redux";
import { useState } from "react";
import {
  Form,
  FormButton,
  Input,
  ListItem,
  StyledBox,
  Title,
  Button,
} from "./SubTodoItemStyles";

export const SubTodoItem = ({ id, text, date, completed }: subToDo) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(text);
  const { deleteSubTodoItem, updateSubTodo } = useTodosActions();

  const handleDelete = () => deleteSubTodoItem({ id, date });

  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    updateSubTodo({ id, task, date });
    toggleFrom();
  };

  const handleChange = (evt: { target: { value: string } }) => {
    setTask(evt.target.value);
  };

  return (
    <ListItem>
      {isEditing ? (
        <Form onSubmit={handleUpdate}>
          <Input onChange={handleChange} value={task} type="text" />
          <FormButton onClick={handleUpdate}>Save</FormButton>
        </Form>
      ) : (
        <StyledBox>
          <Title>{text}</Title>

          <div>
            <Button onClick={toggleFrom} action="edit">
              Edit
            </Button>
            <Button onClick={handleDelete} action="delete">
              Delete
            </Button>
          </div>
        </StyledBox>
      )}
    </ListItem>
  );
};
