import React from 'react';
import { LoadingPage } from './components/loadingPage';
import { TextBox } from './components/textBox';
function App() {
  return (
    <div className='flex h-screen w-screen items-center justify-center border border-black'>
      {/* <TextBox/> */}
      <LoadingPage/>
    </div>
  );
}

export default App;
