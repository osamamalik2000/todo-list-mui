import React from 'react';

import { Container } from '@mui/material';
import ToDoCard from '../ToDoCard/ToDoCard';

const ToDoList = ({ todolist, markAsDone, deleteTodo }) => {
    return (
        <Container>
            {todolist.map(todo => {
                return <ToDoCard key={todo.id} todo={todo} markAsDone={markAsDone} deleteTodo={deleteTodo }/>
            })}
        </Container>
    )
}

export default ToDoList