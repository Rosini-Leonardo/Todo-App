import React from 'react';
import { Card } from '../../utils/data';
 

export function Second({animate}){
  return (
    <React.Fragment>
        <section id='second-page'>
          <main className={`${animate}`}>
            <Card/>
          </main>
        </section>
    </React.Fragment>
  )
}