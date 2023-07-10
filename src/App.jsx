import { useEffect } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
import Modals from './components/Modals';
import { StyleLayout } from './styles/App.style';
import Selects from './components/Selects';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/2880719b55.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }, []);
  
  return (
    <StyleLayout>
      <Buttons />
      <Inputs />
      <Modals />
      <Selects/>
    </StyleLayout>
    
  );
}

export default App;
