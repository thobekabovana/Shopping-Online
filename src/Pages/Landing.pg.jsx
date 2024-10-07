import React from 'react'
import pic from '../assets/images/male-shopaholic-flat-color-vector-faceless-character-shopping-addiction-compulsive-goods-purchasing-visiting-shopping-mall-isolated-cartoon-illustration-web-graphic-design-animation_151150-5607.avif'

export default function LandingPage() {

  return (
    <>

<main style={{ display: 'flex', 
               alignItems: 'center', 
               height: '100vh' }}>
  
    <aside style={{ flex: 1, 
                    textAlign: 'left', 
                    paddingLeft: '5%' }}>

        <h1>Welcome <br /> To Our <br /> Online Shopping!</h1>

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
