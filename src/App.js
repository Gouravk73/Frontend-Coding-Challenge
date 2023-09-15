import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero/Hero'
function App() {
  return (
    <BrowserRouter>
    <div className='max-w-[1366px] mx-auto max-h-[721px]'>
      <Hero/>

    </div>
    </BrowserRouter>
  );
}

export default App;
