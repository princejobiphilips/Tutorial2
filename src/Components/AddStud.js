import React, { useState } from 'react'
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import FormState from './FormState'

const AddStud = () => {
   
   const[value, onHandleChange]=FormState({
       name:"",
       email:""
   })
    const readValue=()=>{
        console.log(value)

    }
    return (
    <div>
         <Grid container style={{padding:20}}>
        
        <Grid style={{padding:5}} item xs={12} sm={12} md={12}>
                <TextField
                fullWidth
                value={value.name}
                name='name'
                type='text'
                variant='outlined'
                label="Name"
                onChange={onHandleChange}/>
            </Grid>
            <Grid style={{padding:5}} item xs={12} sm={12} md={12}>
                <TextField
                fullWidth
                value={value.email}
                name='email'
                type='text'
                variant='outlined'
                label="Email"
                onChange={onHandleChange}/>
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

export default AddStud