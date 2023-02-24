import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, IconButton, Slider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { Stack } from '@mui/system';
import { styled } from '@mui/material/styles';

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';


const PrettoSlider = styled(Slider)({
  color: '#0095ff',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#0095ff',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});



const SimpleAccordion = ({ id, title, para, skill }) => {
  return (
    <div className='acc'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color='secondary' fontSize='large' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <IconButton color='primary' size="large" ><CodeIcon fontSize='large' /></IconButton>
          <Stack >
            <Typography>{title}</Typography>
            <Typography>{para}</Typography>
          </Stack>

        </AccordionSummary>

        {
          skill.map((sk,index) => {
            return (
              <AccordionDetails key={index}>
                <Typography>
                  {sk.title}
                </Typography>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={sk.score}
                />
              </AccordionDetails>
            )
          })
        }


      </Accordion>
    </div>
  );
}

export default SimpleAccordion;