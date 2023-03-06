import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-left-container">
                    <h1>Mrutyunjaya Patra</h1>
                    <p>Hi, I'm Mrutyunjaya Patra working as Fullstack Developer</p>
                </div>
                <div className="footer-middle-container">
                    <h1>Explore</h1>
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/experience'>Experience</Link>
                </div>
                <div className="footer-right-container">
                    <h1>Follow</h1>
                    <IconButton color='success'><InstagramIcon color='secondary' /> </IconButton>
                    <IconButton><LinkedInIcon color='primary' /> </IconButton>
                    <IconButton><GitHubIcon color='success' /> </IconButton>
                    <IconButton><MailIcon color='error' /> </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Footer