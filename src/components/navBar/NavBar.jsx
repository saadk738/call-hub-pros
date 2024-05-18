import React from 'react'
import './NavBar.css'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../../assets/imgs/logo.png'
import Btn from '../btn/Btn';
import { Button } from '@mui/material';

export default function NavBar() {
  return (
    <div>
        {/* navbar top */}
      <div className="nb-top">
        <div>B2B - CPA - CPL</div>
        <div className='np-upper-right'>
            <div className="np-upper-right-item">
                <PhoneEnabledIcon sx={{color: 'red'}} />
                <p>Call Us: 812-225-9590</p>
            </div>
            <div className="np-upper-right-item">
                <EmailIcon sx={{color: 'red'}}/>
                <p>Email Us: cs@callhubpros.com</p>
            </div>
            <div className="np-upper-right-item">
                <EmailIcon sx={{color: 'red'}} />
                <p>Email Us: sales@callhubpros.com</p>
            </div>
        </div>
      </div>
      {/* navbar bottom  */}
      <div className="nb-bottom">
        <img src={logo} alt="logo" />
        <div>
            <ul>
                <li className='active'>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            <Btn
            label="Get Started"
            />
        </div>
      </div>
    </div>
  )
}
