import Announcement from './pages/Announcement';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function App() {
  localStorage.getItem('lang')
    ? localStorage.getItem('lang')
    : localStorage.setItem('lang', 'rus');

  return (
    <div className='App'>
      <Announcement />
    </div>
  );
}

export default App;
