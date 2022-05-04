import React from 'react';
import ContactImg from '../../images/mail.png';

export function Third() {
  return (
      <React.Fragment>
        <section id='third-page'>
            <div className='container mt-5 pt-2'>
                <h1 className='display-3 border-bottom' style={{maxWidth:'fit-content'}}>
                    More about me
                </h1>      
                <p className='mt-3 fs-5 fw-lighter'>
                    My name is Leonardo and I am a full-stack web developer. <br/>
                    My goal is to build simple and performing web apps.
                </p>
                <a 
                type='button' 
                target={'_blank'} 
                className="btn btn-outline-primary"
                href='https://github.com/Rosini-Leonardo?tab=repositories' 
                >GitHub</a>
                <a 
                type='button'
                className="btn btn-primary ms-3"
                href='mailto:rosinileonardo.info@gmail.com' 
                >Contact</a>
            </div>
            <div className='image-container'>
                <img 
                id='contact'
                alt="img"
                width={250}
                height={250}
                src={ContactImg} 
                />
            </div>
        </section>
      </React.Fragment>
  )
}