import React from 'react';

import { FormControl, Container, TextField, Button } from '@mui/material';

const ToDoForm = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '3rem'}}>
      <form>
        <FormControl fullWidth>
            <TextField label="Enter your value" required />
            <Button variant="contained" color="primary" type="Submit" style={{ marginTop: '1rem'}}>+ Add To List</Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default ToDoForm
