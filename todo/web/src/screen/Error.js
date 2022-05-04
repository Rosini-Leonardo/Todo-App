import { useLocation } from 'react-router-dom';
import animationData from '../images/404.json';
import React,{useState,useEffect} from 'react';
import useTitle from '../components/custom/useTitle';
import Lottie from 'react-lottie';

export function Error() {
  useTitle('Todo - page not found');

  const[width,setWidth] = useState(500);
  const[height,setHeight] = useState(500);

  const location = useLocation();

  // styled container
  const LottiConfig = {
    loop: true,
    autoplay:true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }  
  }

  useEffect(()=>{
    if(window.innerWidth < 991){
      setHeight(300);
      setWidth(300);
    }else{
      return null;
    }

    window.addEventListener('resize',()=>{
      window.innerWidth > 991?(setWidth(500)):(setWidth(350));
      window.innerWidth > 991?(setHeight(500)):(setHeight(350));
    });
  },[])
  return (
    <React.Fragment>
      <section id='error-page'>
        <div className='container-sm error-body mt-5'>
          <h1>Sorry, there was a problem !</h1>
          <h5>
            Page not found for <code style={{color:'var(--dark)'}}>{location.pathname}</code>, <br/>
            please try again or come back to the <span> </span>
            <a href="/" className='text-warning w-100'>home</a>.
          </h5>
        </div>
        <div id='error__lottie-container'>
          <Lottie
          width={width}
          height={height}
          options={LottiConfig}
          />
        </div>
      </section>
    </React.Fragment>
  )
}