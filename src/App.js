import React from 'react';
import { GlobalContextProvider } from './hooks'


export const App = () => {
  return (
    <GlobalContextProvider>
        <div>hello</div>
    </GlobalContextProvider>
  );
}

