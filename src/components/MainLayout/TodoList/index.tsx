import { Children } from "react";
import { useSelector } from "react-redux";
import { ToDo, TodosSelectors } from "@redux";
import { TodoItem } from "./TodoItem/Todoitem";
import { StyledBox, Title, List } from "./ListStyles";

export const TodoList = () => {
  const todos = useSelector(TodosSelectors.getTodos);

  return (
    <>
      {todos.length > 0 && (
        <StyledBox>
          <Title>Dates</Title>
          <List>
            {Children.toArray(
              todos.map((todo: ToDo) => {
                return <TodoItem {...todo} summary={todo.subToDo.length} />;
              })
            )}
          </List>
        </StyledBox>
      )}
    </>
  );
};
