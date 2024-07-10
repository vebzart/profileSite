import React from 'react'
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"
function Footer() {
  return (
    <div className='footer'>
        <div className='footerLogo'>
            
        </div>
        <ul className='footerLinks'>
            <li>Company</li>
            <li>Products</li>
            <li>Contacts</li>
            <li>About</li>

        </ul>
        <div className='footerSocialIcon'>
            <div className='footerIconContainer'>
            <FaLinkedin />

            </div>
            <div className='footerIconContainer'>
            <FaInstagram />

            </div>
            <div className='footerIconContainer'>
            <FaWhatsapp />

            </div>

        </div>
        <div className='footerCopyrights'>
            <hr />
            <p>©Copyright @ 2024-All Rights are Reserved</p>

        </div>
      
    </div>
  )
}

export default Footer
