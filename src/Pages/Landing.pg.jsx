import React from 'react'
import pic from '../assets/images/man-relaxing-barefoot-on-couch-260nw-1813016101.webp'

export default function LandingPage() {

  
    const carvedButtonStyle = {
        backgroundColor: '#EC5649',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.1s ease-in-out',
    };

  return (
    <>

<main style={{ display: 'flex', 
               height: '100vh',
               marginTop: "10%" }}>
  
    <aside style={{ 
                    // flex: 1, 
                    textAlign: 'left', 
                    paddingLeft: '5%',
                    marginLeft: '5%',
                    justifyContent: "space-around" }}>

        <h1>Welcome To<br/>Our Online<br />Shopping!</h1>
        <p>Our online shopping platform offers<br />  a wide variety of products,<br />  including electronics, clothing</p>
        <button style={carvedButtonStyle} >Free Download</button>


    </aside>

    <aside style={{ flex: 1, 
           textAlign: 'right', 
           paddingRight: '5%' }}>
        <div>
            <img src={pic} alt="pic" 
                 style={{ marginTop: "7%", 
                          maxWidth: "100%", 
                          height: "auto",
                          marginRight: "10%"}} />
        </div>
    </aside>
</main>

    </>
  )
}
