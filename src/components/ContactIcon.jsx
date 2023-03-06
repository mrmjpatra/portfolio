import { Box, Card, Container, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import * as MuIcon from '@mui/icons-material';


const ContactIcon = ({title,value,icon}) => {
    const Icon = MuIcon[icon]
    console.log(MuIcon)
    return (
        <>
            <Stack direction={'row'}>
                <Box>
                    <IconButton>
                          <Icon/>
                    </IconButton>
                </Box>
                <Stack style={{marginBottom:'1.2rem'}}>
                    <Typography>{title}</Typography>
                    <Typography>{value}</Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default ContactIcon