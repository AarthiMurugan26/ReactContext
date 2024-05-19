
import './App.css';
import { TemperatureProvider } from './context';

import { TemperatureCalculator } from './calculator';
function App() {
  return (
  <TemperatureProvider>
      <div className='App-header'>
        <h1>Temperature Converter</h1>
        <TemperatureCalculator />
      </div>
    </TemperatureProvider>
  )
};

export default App;