import { Box, Card, Container, Icon, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';


const ContactIcon = ({id,title,value,icon}) => {
    
    return (
        <>
            <Stack direction={'row'}>
                <Box>
                    <IconButton>
                        {
                            
                        }
                    </IconButton>
                </Box>
                <Stack>
                    <Typography>{title}</Typography>
                    <Typography>{value}</Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default ContactIcon