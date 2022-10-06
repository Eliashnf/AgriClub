import React, { PureComponent } from 'react'
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material'; 
import Button from '@mui/material/Button';


const Contacter = () => {
    return (
      <div className='center' style={{marginTop:"40px"}}>
          <FormControl sx={{ width: "200px", marginTop:"20px"}}>
            <InputLabel htmlFor="my-input">Adresse Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl sx={{ width: "200px", marginTop:"20px"}}>
            <InputLabel htmlFor="my-input">Objet</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl sx={{ width: "1000px",  marginTop:"20px"}}>
            <InputLabel htmlFor="my-input" >Message</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Faites nous confiance.</FormHelperText>
          </FormControl>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href="/"
            >
              Envoyer
          </Button>
      </div>
       ) }


export default Contacter