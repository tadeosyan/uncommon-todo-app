import { Wrapper, MainContainer } from "./MainLayoutStyles";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const MainLayout = () => {
  return (
    <MainContainer>
      <Wrapper>
        <h2>To do list</h2>
        <TodoForm />
        <TodoList />
      </Wrapper>
    </MainContainer>
  );
};

export default MainLayout;
