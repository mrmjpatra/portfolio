import { Box, Grid, IconButton, Paper, TextField, Typography } from "@mui/material"
import styled from "@emotion/styled";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const ContactMe = () => {
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        
                   </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ContactMe