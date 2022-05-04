import React,{useState,useEffect} from 'react'
import { RiSendPlaneFill } from 'react-icons/ri';

import TaskTaker from './TaskTaker';
import { TaskFormatter } from './TaskFormatter';

export function Todo() {
    // dynamic animation for the arrow icon 
    const[checkerClass,setCheckerClass] = useState('');
    // input-task value (body)
    const [value,setValue] = useState({ id:null , payload:'' });

    // Generate an ID for each item
    function generateID(){
        let unique_id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return unique_id;
    };

    const checkInput = () =>{
        if(value.payload === '' || value.payload === undefined || value.payload === null){
            setCheckerClass('');
        }else if(value.payload !== '' && value.payload !== undefined && value.payload !== null){
            // Run the animation 
            setCheckerClass('animated-arrow');
            sessionStorage.setItem(generateID(),value.payload)  
            // Wait the loading of the animation
            setTimeout(() => {
                setValue({
                    id:null,
                    payload:''
                })
            }, 155);
        }
    };
    // Reload animation class
    useEffect(()=>{
        setCheckerClass('')
    },[value])
  return (
      <React.Fragment>
          <div className='container'>
              <div className='row'>
                  {/* Form to manage the task to add */}
                  <section className='col-12  mt-5'>
                      <form
                      onSubmit={(e)=> e.preventDefault()}
                      className='d-inline-flex'
                      >
                          <input
                          type={"text"}
                          value={value.payload}
                          placeholder='Add your new task'
                          className='form-control form-control-lg'
                          onChange={(e)=>setValue({id: generateID(),payload: e.target.value})}
                          />
                          <button
                          onClick={()=>checkInput()}
                          className='btn btn-lg btn-primary mx-1'
                          >
                              <RiSendPlaneFill
                              size={20}
                              className={`${checkerClass}`}
                              />
                          </button>
                      </form>
                  </section>
                {/* Make the component visible only if there are tasks */}
                { sessionStorage.length > 0?(<TaskTaker/>):('') }
                {/* Get the number of tasks and clean button */}
                <TaskFormatter/>
              </div>  
            </div>
      </React.Fragment>
  )
};