import { useCallback } from "react";
import { useDispatch } from "react-redux";
import types, { Dispatch } from "./types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const dispatch: Dispatch = useDispatch();

  const addTodoItem = useCallback(
    (payload: { text: string; date: string }) => {
      dispatch({ type: types.ADD_TODO, payload });
    },
    [dispatch]
  );

  const deleteSubTodoItem = useCallback(
    (payload: { id: string; date: string }) => {
      dispatch({ type: types.DELETE_SUBTODO, payload });
    },
    [dispatch]
  );

  const updateSubTodo = useCallback(
    (payload: { id: string; task: string; date: string }) => {
      dispatch({ type: types.UPDATE_SUBTODO, payload });
    },
    [dispatch]
  );

  return {
    addTodoItem,
    deleteSubTodoItem,
    updateSubTodo,
  };
}
