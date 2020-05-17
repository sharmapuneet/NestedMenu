import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleFirstName = event => {
    setFirstName(event.target.value)
  }

  const handleLastName = event => {
    setLastName(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(document.getElementById('simple-form'))

    data.set('fName', firstName)
    data.set('lName', lastName)

    const settings = {
      method: 'POST',
      body: data,
    }
  
    fetch(`/api/form-submit-url`, settings)

    setFirstName('')
    setLastName('')
    alert(`Form has been successfully submitted with First Name: ${firstName} and Last Name: ${lastName} :)`)
  }

  return (
    <form noValidate autoComplete="off" id="simple-form">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth id="fname" label="First Name" value={firstName} onChange={handleFirstName} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth id="lname" label="Last Name" value={lastName} onChange={handleLastName} variant="outlined" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button fullWidth variant="contained" color="secondary" href="#/">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Form
