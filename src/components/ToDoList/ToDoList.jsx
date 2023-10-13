import React from 'react';

import { Container } from '@mui/material';
import ToDoCard from '../ToDoCard/ToDoCard';

const ToDoList = ({ todolist }) => {
    return (
        <Container>
            {todolist.map(todo => {
                return <ToDoCard key={todo.id} title={todo.title} />
            })}
        </Container>
    )
}

export default ToDoList