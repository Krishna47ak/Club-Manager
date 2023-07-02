import React from 'react'
import '../Footer/footer.css'

function Footer() {
    const newyear=new Date().getFullYear();
    return (
      <div className='footer-container'>
            <p className='website-rights'>CollegeZilla © <span>{newyear}</span></p>
          </div>
    );
  }
  
  export default Footer;
