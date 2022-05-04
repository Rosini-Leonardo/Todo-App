import React, { useState,useEffect } from 'react';
import useTheme from '../custom/useTheme';

export default function Switch() {
  const[active,setActive] = useState(false);

  function handleTheme(){
    if(active === false){
      // Dark mode
      useTheme(true);
      setActive(true);

      localStorage.setItem('mode','dark');
    }else if(active === true){
      // Light mode
      useTheme(false);
      setActive(false);
      localStorage.setItem('mode','light');
    }
  };

  // check if dark mode is already set up, in true case call the useTheme()
  useEffect(()=>{
    if(localStorage.getItem('mode') === 'dark'){
      useTheme(true);
    }
  },[])
  
  return (
    <div id='switchBox' className='form-check form-switch'>
      <input
      readOnly
      id="switch" 
      role="switch"
      checked={localStorage.getItem('mode') === 'dark'?(true):(false)}
      value={active}
      type="checkbox"
      onClick={()=> handleTheme()}
      className="form-check-input shadow-sm"
      />
      <label
      className='ms-1'
      htmlFor='switch'
      >{localStorage.getItem('mode') === 'dark'?('Dark'):('Light')}
      </label>
    </div>
  )
};