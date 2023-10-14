import { useState } from "react";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import { Typography, Container } from "@material-ui/core";
import './App.css';

function App() {

  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "Eat",
      desc: "Eat description",
      isCompleted: true
    },
    {
      id: 2,
      title: "Sleep",
      desc: "Sleep description",
      isCompleted: false
    },
    {
      id: 3,
      title: "Conquer",
      desc: "Sleep description",
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length+1,
      title: text,
      isCompleted: false
    }

    setTodo([...todos, newTodo])
  }

  const markAsDone = (id)=>{
    setTodo(todos.map(todo=>{ 
      if(todo.id == id){
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    }))
  }

  const deleteTodo = (id)=>{
    setTodo(todos.filter(todo =>  todo.id != id ))
  }

  return (
    <>
      <Container>
        <div className="text-center pt-5">
          <Typography variant="h3">Task List</Typography>
        </div>

        <ToDoForm addTodo={addTodo}/>

        <ToDoList todolist={todos} markAsDone={markAsDone} deleteTodo={deleteTodo}/>
      </Container>
    </>
  );
}

export default App;
