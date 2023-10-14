import React from 'react'
import { Card, CardContent, Typography, Container, IconButton } from "@mui/material";
import { Check, Delete } from "@material-ui/icons";
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';

function ToDoCard({ todo, markAsDone, deleteTodo }) {
    const todoStyle = todo.isCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" }

    const deleteTask = () => {
        deleteTodo(todo.id)
    }

    const markAsDoneClick = () => {
        markAsDone(todo.id)
    }

    return (

        <Container>
            <Card variant="outline" className="bg-color-gray my-4">
                <CardContent>
                    <Typography variant='h5' component='h2' style={todoStyle}>
                        <IconButton onClick={markAsDoneClick}>
                            {todo.isCompleted ? <RemoveDoneIcon className="bt-danger" /> : <Check className="bt-success" />}
                        </IconButton>
                        {todo.title}
                        <IconButton onClick={deleteTask} className='float-end'>
                            <Delete className="bt-danger" />
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ToDoCard;
