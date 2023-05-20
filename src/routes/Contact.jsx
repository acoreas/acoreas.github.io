import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const FORM_ENDPOINT = "";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  
  function handleSubmit() {
    setTimeout(() => {
      setSubmitted(true);
    }, 5000);
  };

  if (submitted) {
    return (
      <>
        <Grid container alignItems="center" minHeight="80vh">
          <Grid item xs={12} >
            <Typography variant="h2" fontWeight="bold" textAlign="center" color="secondary">Thank you!</Typography>
            <Typography variant="h4" fontWeight="medium" textAlign="center">I'll be in touch soon.</Typography>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <Container component="form" action={FORM_ENDPOINT} method="POST" maxWidth="sm" sx={{paddingY: 4, minHeight:"80vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Stack spacing={2} >
        <Typography variant="h4" fontWeight="medium" textAlign="center" paddingBottom={2}>Wanna get in touch?<br/>Feel free to shoot me a message!</Typography>
        <Box >
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <TextField
            name="message"
            label="Message"
            variant="outlined"
            required
            multiline rows={5}
            fullWidth
          />
        </Box>
        <Box sx={{display:"flex", justifyContent:"center", paddingTop:2}}>
          <Button onClick={handleSubmit} type="submit" variant="contained" endIcon={<SendIcon/>} sx={{width:"30%"}}>Send</Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default Contact