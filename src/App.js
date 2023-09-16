import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero/Hero'
import Payments from './components/payment/Payments';
import Banking from './components/Banking/Banking';
import CardCash from './components/cardcash/CardCash';
import Investing from './components/investing/Investing';
function App() {
  return (
    <BrowserRouter>
    <div className='max-w-[1366px] mx-auto max-h-[721px]'>
      <Hero/>
      <Payments/>
      <Banking/>
      <CardCash/>
      <Investing/>

    </div>
    </BrowserRouter>
  );
}

export default App;
