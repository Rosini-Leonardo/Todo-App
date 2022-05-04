import React,{useRef} from 'react';
import { ListOfLinks } from '../utils/links';

export function Navbar() {
  return (
    <React.Fragment>
      <nav 
      id='navbar'
      className="navbar navbar-expand-lg navbar-light" 
      >
        <div 
        className="container-sm" 
        >
          {/* Main */}
          <a 
          href="/"
          className='brand'
          >Todo App
          </a>
          <button 
          type={"button"}
          className="navbar-toggler" 
          data-bs-toggle="offcanvas" 
          aria-controls="offCanvas"
          data-bs-target="#offCanvas" 
          ><span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Offcavas */}
          <aside 
          tabIndex="-1" 
          id="offCanvas" 
          className="offcanvas offcanvas-start" 
          aria-labelledby="offCanvasLabel"
          >
            <header className="offcanvas-header">
              <h5 
              id="offCanvasLabel"
              className="offcanvas-title ms-2"
              >Menu</h5>
              <button
              id='button-close'
              type={"button"}
              aria-label="Close"
              data-bs-dismiss="offcanvas" 
              className="btn-close btn-lg text-reset shadow-none mx-3" 
              ></button>
            </header>

            {/* Body */}
            <section className="offcanvas-body">
              <div className='mt-5 ms-2'>
                <ListOfLinks/>  
              </div>
            </section>
          </aside>
        </div>
      </nav>
    </React.Fragment>
  )
};