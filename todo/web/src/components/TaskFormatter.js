import React from 'react';

export function TaskFormatter() {
    // Clean the sessionStorage from tasks and refresh page
    function cleaner(){
        if(sessionStorage.length === 0 ){
            return null;
        }else if(sessionStorage.length > 0) {
            sessionStorage.clear()
            return window.location.reload();
        }
    };
    return(
        <React.Fragment>
            <section className='row mt-3'>
                {/* Return the length of sessionStorage */}
                <div className='col-6'>
                    <p className='mx-1' >{    
                        sessionStorage.length === 0?('You have 0 task'):(
                        sessionStorage.length === 1?('You have 1 task'):(
                        sessionStorage.length > 1?(`You have ${sessionStorage.length} tasks`):('Error')))
                    }</p>
                </div>
                {/* Clean function, that remove all items from the sessionStorage */}
                <div className='col-4'>
                    <button
                    onClick={()=> cleaner()} 
                    className='btn btn-outline-danger' 
                    >clean all</button>
                </div>
            </section>
        </React.Fragment>
    );
}