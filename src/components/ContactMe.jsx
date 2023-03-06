import { Box, Button, Grid, IconButton, Paper, TextField, Typography } from "@mui/material"
import styled from "@emotion/styled";
import SendIcon from '@mui/icons-material/Send';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const ContactMe = () => {
    return (
        <div className="contactMe">
            <Grid container spacing={2}  sx={{width:'100%'}}>
                <Grid item xs={6}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="First Name" variant="outlined" />

                </Grid>
                <Grid item xs={6}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Last Name" variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Email" type={'email'} variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Text..." multiline rows={4} variant="outlined" />
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" size="large" endIcon={<SendIcon />}>Send</Button>
                </Grid>
            </Grid>

        </div>
    )
}

export default ContactMe