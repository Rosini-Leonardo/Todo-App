import React from 'react';
import styled from 'styled-components';
// Delete icon
import {FiDelete} from 'react-icons/fi';

const StyledBox = styled('div')`
  .col-10{
    padding-top: 0.5rem;
  }

  margin-left: 0.83rem;
  margin-top: 1rem;
  padding:0.6rem;

  background-color: var(--blue);
  color: white;
  border-radius: 5px;
  max-width: 370px;
  border: 1px solid var(--blue);

  #removeBtn{
    padding-bottom: 0.5rem;
  }
`;

export function Task({value,removeTask}) {
  return (
  <React.Fragment>
    <StyledBox>
      <section className='row'>
        <div className='col-10'>
          <span>
            { value || "Sorry, there is an error." }
          </span>
        </div>
        <div className='col-2'>
          <button 
          id='removeBtn' 
          onClick={()=>removeTask()} 
          className='btn shadow-none'
          ><FiDelete/>
          </button>
        </div>
      </section>
    </StyledBox>
  </React.Fragment>
  )
};