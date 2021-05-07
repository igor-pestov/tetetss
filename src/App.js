import Announcement from './pages/Announcement';

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
