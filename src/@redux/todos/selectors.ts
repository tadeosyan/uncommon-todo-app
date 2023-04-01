import { TodoStore } from "./types";

type State = { todos: TodoStore };

const getTodos = (state: State) => state.todos.list;

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTodos };
