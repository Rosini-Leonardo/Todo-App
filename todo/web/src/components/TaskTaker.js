import React from 'react';
import { Task } from './styled/Task';

export default function TaskTaker(){
    // Remove single task from sessionStorage
    function removeTask(el){
        sessionStorage.removeItem(el);
        location.reload();
    };
    return(
        <React.Fragment>
            {
                Object.keys(sessionStorage).map((el,i)=>{
                    // Take the body of the task
                    let body = sessionStorage.getItem(el)
                    return(
                        <Task
                        key={i}
                        value={body}
                        removeTask={()=> removeTask(el) }
                        />
                    )
                })
            }
        </React.Fragment>
    );
}