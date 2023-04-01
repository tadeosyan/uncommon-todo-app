import { useState } from "react";
import { Title, Input, DatePicker, Button } from "./FormStyles";
import { useTodosActions } from "@redux";
import { InnerWrapper } from "../MainLayoutStyles";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const { addTodoItem } = useTodosActions();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (text && date) {
      addTodoItem({ text, date });
      setText("");
    }
  };

  return (
    <InnerWrapper>
      <Title>New Task</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here"
        />
        <DatePicker type="date" onChange={(e) => setDate(e.target.value)} />
        <Button type="submit">Add</Button>
      </form>
    </InnerWrapper>
  );
};
