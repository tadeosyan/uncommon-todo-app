import nextIcon from "../assets/navigateNext.png";
import { Link, ListItem } from "./TodoItemStyles";

type TodoItemProps = {
  id: string;
  date: string;
  summary: number;
};

export const TodoItem = ({ id, date, summary }: TodoItemProps) => (
  <Link to={`/todo/${id}`}>
    <ListItem>
      {date} {summary > 0 && `(${summary})`}
      <img src={nextIcon} alt="todo" height={12} />
    </ListItem>
  </Link>
);

export default TodoItem;
