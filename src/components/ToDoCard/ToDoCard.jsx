import React from 'react'

import { Card, CardContent, Typography, Container, IconButton} from "@mui/material";
import { Check, Delete } from "@material-ui/icons";
import "./ToDoCard.css";
function ToDoCard({title}) {
  return (
    <Container>
      <Card variant="outline" style={{ marginTop: '2rem', background: 'lightgray' }}>
        <CardContent>
            <Typography variant='h5' component='h2'>
                <IconButton>
                    <Check className="success" />
                </IconButton>
                {title}
                <IconButton className='right'>
                    <Delete className="danger" />
                </IconButton>
            </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default ToDoCard
