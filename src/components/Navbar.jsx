import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'
import { IconButton, Paper } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitlocation = pathname.split('/');
    const [hamburger, setHamburger] = useState(false);


    useEffect(()=>{
        setHamburger(false);
    },[location])
    return (
        <Paper sx={{
            color: 'black'
        }} square elevation={5}>
            <div className='navbar'>
                <div className="navtitle">
                    <h2> Portfolio</h2>
                </div>

                <IconButton size='large' color='primary' onClick={() => {
                    setHamburger((hamburger) => !hamburger);
                }} >
                    {hamburger == false ? <DehazeIcon /> : <CloseIcon />}
                </IconButton>
                <div className={`menu-hidden-item ${hamburger == false ? 'hamburger' : ''}`} >
                    <div className="link-menu">
                        <Link to='/'>Home</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/experience'>Experience</Link>
                    </div>

                </div>


                <div className="nav">
                    <Link className={splitlocation[1] === "" ? 'active' : 'no'} to='/'>Home</Link>
                    <Link to='/projects' className={splitlocation[1] === 'projects' ? 'active' : 'no'} >Projects</Link>
                    <Link to='/experience' className={splitlocation[1] === 'experience' ? 'active' : 'no'} >Experience</Link>
                </div>


            </div>
        </Paper>
    )
}

export default Navbar