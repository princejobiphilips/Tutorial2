import React, { useState } from 'react'
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core'
import axios from 'axios'

const AddStudents = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const readValue=()=>{
            console.log(name)
            console.log(email)
    }
    return (
    <div>
        <Grid container style={{padding:20}}>
        
        <Grid style={{padding:5}} item xs={12} sm={12} md={12}>
                <TextField
                fullWidth
                value={name}
                name='name'
                type='text'
                variant='outlined'
                label="Name"
                onChange={(event)=>{setName(event.target.value)}}/>
            </Grid>
            <Grid style={{padding:5}} item xs={12} sm={12} md={12}>
                <TextField
                fullWidth
                value={email}
                name='email'
                type='text'
                variant='outlined'
                label="Email"
                onChange={(event)=>{setEmail(event.target.value)}}/>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <Button
                onClick={readValue}
                color='primary'
                variant='contained'>Submit</Button>
            </Grid>
        </Grid>
    </div>
  )
}

export default AddStudents