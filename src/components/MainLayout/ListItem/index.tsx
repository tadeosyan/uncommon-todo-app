import { Children } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TodosSelectors, ToDo, subToDo } from "@redux";
import { SubTodoItem } from "./SubTodoItem/SubToDoItem";
import { MainContainer, InnerWrapper, Wrapper } from "../MainLayoutStyles";
import { Button, Header, List } from "./ListItemStyles";
import goBackIcon from "./navigateBack.png";

const ListItem = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const todos = useSelector(TodosSelectors.getTodos);
  const selectedTodo: ToDo = todos.filter((todo: ToDo) => todo.id === id)[0];

  const { date, subToDo } = selectedTodo;

  return (
    <MainContainer>
      <Wrapper>
        <Header>
          <Button onClick={goBack}>
            <img src={goBackIcon} alt="" />
            <span>Go Back</span>
          </Button>
          <h2>
            {date} {subToDo.length > 0 && `(${subToDo.length})`}
          </h2>
        </Header>

        <InnerWrapper>
          {subToDo.length ? (
            <List>
              {Children.toArray(
                subToDo.map((todo: subToDo) => <SubTodoItem {...todo} />)
              )}
            </List>
          ) : (
            <h4>There are no todos</h4>
          )}
        </InnerWrapper>
      </Wrapper>
    </MainContainer>
  );
};

export default ListItem;
