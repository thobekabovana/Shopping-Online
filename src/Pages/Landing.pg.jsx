import React from 'react'


export default function LandingPage() {

  return (
    <>

      <main>
        
        <section style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "25%",
            top: "45%",
            // transform: "translate(-40%, -30%)",
        }}>
            <h1 style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
              fontSize: "48px",
            }}>Welcome to Our <br></br> Oline Shopping</h1>

            <h2 style={{
               fontSize: "20px"
            }}>Make yourself an easy Shopping and, <br></br> save your time for more important thinggs </h2>

        </section>
      </main>
    </>
  )
}
