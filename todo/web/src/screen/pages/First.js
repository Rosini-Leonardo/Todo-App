import webDev from '../../images/web-dev.json';
import Lottie from 'react-lottie';
import React from 'react';

export function First(width,height) {
    const lottiConfig = {
        loop: true,
        autoplay:true,
        animationData: webDev,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }  
    }
  return (
      <React.Fragment>
        <section id='first-page'>
            <div className='container mt-5 pt-2'>
                <h1 className='display-3 border-bottom' style={{maxWidth:'fit-content'}}>
                    Why this project?
                </h1>      
                <p className='mt-3 fs-5 fw-lighter'>
                    I decided to build this project to show my web development skills. <br/>
                    I mainly focused on functionality and writing code that is readable and intuitive.
                </p>
            </div>
            
            <div className='image-container'>
                <Lottie
                width={width}
                height={height}
                options={lottiConfig}
                />
            </div>
        </section>
      </React.Fragment>
  )
}
