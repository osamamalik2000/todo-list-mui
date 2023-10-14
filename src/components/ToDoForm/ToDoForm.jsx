import React, { useState } from 'react';

import { FormControl, Container, TextField, Button } from '@mui/material';

const ToDoForm = ({ addTodo }) => {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    
    return (
        <Container maxWidth="sm" style={{ marginTop: '3rem' }}>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <TextField label="Enter your value" required
                        value={text} onChange={(e) => setText(e.target.value)}
                    />
                    <Button variant="contained" color="primary" type="Submit" style={{ marginTop: '1rem' }}>+ Add To List</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default ToDoForm;
