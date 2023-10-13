import { useState } from "react";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import { Typography, Container } from "@material-ui/core";
import './App.css';

function App() {

  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "Play",
      desc: "Play description",
      isCompleted: false
    },
    {
      id: 2,
      title: "Eat",
      desc: "Eat description",
      isCompleted: true
    },
    {
      id: 3,
      title: "Sleep",
      desc: "Sleep description",
      isCompleted: false
    }
  ]);

  return (
    <>
      <Container>
        <div className="text-center">
          <Typography variant="h3">Task List</Typography>
        </div>
        <ToDoForm />

        <ToDoList todolist={todos} />
      </Container>
    </>
  );
}

export default App;
