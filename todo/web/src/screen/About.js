import useTitle from '../components/custom/useTitle';
import React,{ useState,useEffect } from 'react';
import { First,Second,Third } from './pages';
import { Navbar } from '../components';

export function About() {
  useTitle('Todo - about');

  const[width,setWidth] = useState(400);
  const[height,setHeight] = useState(400);
  const[animate,setAnimate] = useState('card-container');

  // change the Lottie size 
  useEffect(()=>{
    if(window.innerWidth < 991){
      setHeight(200);
      setWidth(200);
    }else{
      return null;
    }
    window.addEventListener('resize',()=>{
      window.innerWidth > 991?(setWidth(400)):(setWidth(200));
      window.innerWidth > 991?(setHeight(400)):(setHeight(200));
    });
  },[])
  return (
    <React.Fragment>
      <Navbar/>
      <div className="holster" onScrollCapture={()=>setAnimate('card-container card-animation')}>
        <div className="page-container y mandatory-scroll-snapping" dir="ltr">
          <First width={width} height={height} />
          <Second animate={animate} />
          <Third/>
        </div>
      </div>
    </React.Fragment>
  )
};