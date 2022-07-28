import React from 'react';
import { ExpandingGallery } from './components/expandingGallery';
import { LoadingPage } from './components/loadingPage';
import { TextBox } from './components/textBox';
import { CardData } from './data/cardData';
function App() {
  return (
    <div className='flex h-screen w-screen items-center justify-center border border-black'>
      {/* <TextBox/> */}
      <LoadingPage/>
      {/* <ExpandingGallery data={CardData}/> */}
    </div>
  );
}

export default App;
