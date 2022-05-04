import React from 'react';
import { Home,About,Error } from '../screen';
import { Route,Routes as Switch } from 'react-router-dom';

export function App() {
  return( 
    <React.Fragment>
        <Switch>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<Error/>} />
        </Switch>
    </React.Fragment>
  )
};