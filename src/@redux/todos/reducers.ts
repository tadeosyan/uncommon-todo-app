import types, { TodoStore, Payload, ToDo, subToDo } from "./types";
import { v4 as uuidv4 } from "uuid";
export const initialValues: TodoStore = {
  list: [],
};

export default function todoReducer(
  state: TodoStore = initialValues,
  { type, payload }: Payload
) {
  switch (type) {
    case types.ADD_TODO:
      const existingItem = state.list.find(
        (todo: ToDo) => todo.date === payload.date
      );

      if (existingItem) {
        return {
          ...state,
          list: state.list.map((todo: ToDo) => {
            if (todo.date === existingItem.date) {
              return {
                ...todo,
                subToDo: [
                  ...todo.subToDo,
                  {
                    id: uuidv4(),
                    text: payload.text,
                    date: payload.date,
                    completed: false,
                  },
                ],
              };
            }
            return todo;
          }),
        };
      } else {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: uuidv4(),
              text: payload.text,
              date: payload.date,
              completed: false,
              subToDo: [],
            },
          ],
        };
      }

    case types.DELETE_SUBTODO:
      const newList = state.list.map((todo: ToDo) => {
        if (todo.date === payload.date) {
          const newSubToDo = todo.subToDo.filter(
            (subToDo: subToDo) => subToDo.id !== payload.id
          );
          return { ...todo, subToDo: newSubToDo };
        }

        return todo;
      });

      return { ...state, list: newList };

    case types.UPDATE_SUBTODO:
      const selectedTodo: any = state.list.find(
        (todo: ToDo) => todo.date === payload.date
      );
      const updatedTodos = selectedTodo.subToDo.map((todo: ToDo) => {
        if (todo.id === payload.id) {
          return { ...todo, text: payload.task };
        }
        return todo;
      });

      return {
        ...state,
        list: state.list.map((todo: ToDo) => {
          if (todo.date === payload.date) {
            return { ...todo, subToDo: updatedTodos };
          }

          return todo;
        }),
      };

    default:
      return state;
  }
}
