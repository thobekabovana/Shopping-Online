import React from 'react'
import { Outlet, Link } from "react-router-dom";
import image from '../assets/images/360_F_332316530_ofa4oQA3ZGWxd4tRLDqKuADfy2hnpWuU.jpg'

export default function Navigation() {

  return (
    <>
     <nav>

     <ul>
            
       <div >
           
            <nav>
 
            <img src={image} alt="Logo" style={{ width: "3%",}}></img>

            <Link to="/log-in" style={{ fontSize: "20px", color: "black", marginLeft: "85%",}}>LogIn</Link>
        
            <Link to="/sign-up" style={{fontSize: "20px",  color: "black",marginLeft: "3%",}}>SignUp</Link>
            </nav>
            </div>
          
        </ul>

    </nav> 
    </>
  )
}
