import { Button } from '@mui/material'
import React from 'react'
import './about.css';
import profile from '../../assets/photo_2022-11-17_00-02-26.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <h1>About Me</h1>
            <div className="about-main-container">
                <div className="about-left-container">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right-container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam alias atque iusto beatae quis. Amet dolorum autem natus quia?</p>
                   <div className="downloadcvbtn">
                   <Button variant='contained'>Download CV</Button>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default About