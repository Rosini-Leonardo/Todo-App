import React from 'react';

import { Navbar,Todo } from '../components';
import useTitle from '../components/custom/useTitle';

export function Home() {
  useTitle('Todo - home');
  return (
    <React.Fragment>
      <Navbar/>
      <Todo/>
    </React.Fragment>
  )
};