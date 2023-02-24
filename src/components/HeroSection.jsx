import React from 'react'
import '../pages/Home/home.css'
import Dp from '../assets/photo_2022-11-17_00-04-44-removebg-preview.png'
import { Button, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className="left-container">
      <div className="social-container">
          <IconButton href='www.github.com'>
            <MailIcon />
          </IconButton>
          <IconButton href='www.github.com'>
            <LinkedInIcon />
          </IconButton>
          <IconButton href='www.github.com'>
            <GitHubIcon />
          </IconButton>
        </div>
        <div className="main-left-container">
          <h1>Hi, I'm Mrutyunjaya</h1>
          <h3>Fullstack Developer</h3>
          <p>
            High level experience in web design and development knowledge, producing quality work.
          </p>
          <div className="btn-container">
            <Button size='large' variant="contained" sx={{
              height:'3.6rem'
            }} endIcon={<SendIcon />}>Contact Me</Button>
          </div>
        </div>
        
      </div>

      {/* right container */}
      <div className="right-container">
        <div className="bg-container">
          <div className="image-container">

          </div>
          <img src={Dp} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection