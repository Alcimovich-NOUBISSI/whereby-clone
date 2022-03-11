import classes from "./header.module.css";
import { useState } from 'react'

function Header() {
  
  const [header, setHeader] = useState (false);

  const changeBackground = () =>{
    if(window.scrollY >= 80 ) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  if (typeof window !== 'undefined') {window.addEventListener('scroll', changeBackground);}

    return(
        <>
          <header className = { header ? classes.header_active : ""}>
            <h2>Whereby</h2>
            <div className = {classes.select}>
              <p>Product</p>
              <p>Pricing</p>
              <p>Support</p>
              <p>Log In</p>
              <p className = {classes.button}> Try for free</p>
            </div>
            <div className = {classes.options}>
              <h3>Meetings</h3>
              <p>Host beautiful video meetings with no login or download</p>
              <hr/>
              <h3>Embedded</h3>
              <p>Easily add custom video calls to your website or app</p>
           </div>
          </header>
          
        </>
    );
}

export default Header;