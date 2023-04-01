export type Dispatch = (payload: Payload) => void;

export type Payload = {
  type: string;
  payload?: any;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ADD_TODO: "ADD_TODO",
  DELETE_SUBTODO: "DELETE_SUBTODO",
  UPDATE_SUBTODO: "UPDATE_SUBTODO",
};

export type TodoStore = {
  list: ToDo[];
};

export type ToDo = {
  completed: boolean;
  date: string;
  id: string;
  subToDo: subToDo[];
  text: string;
};

export type subToDo = {
  id: string;
  text: string;
  date: string;
  completed: boolean;
};
