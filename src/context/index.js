// TemperatureContext.js
import React from 'react';

export const TemperatureContext = React.createContext();

export const TemperatureProvider = ({ children }) => {
  const [unit, setUnit] = React.useState('celsiusUnit');
  const [temperature, setTemperature] = React.useState('');

  const changeInCelsius = (value) => {
    setUnit('celsiusUnit');
    setTemperature(value);
  };

  const changeInFarenheit = (value) => {
    setUnit('farenheitUnit');
    setTemperature(value);
  };

  const celsius = unit === 'farenheitUnit' ? parseFloat(((temperature - 32) * 5) / 9).toFixed(2) : temperature;
  const farenheit = unit === 'celsiusUnit' ? parseFloat((temperature * 9) / 5 + 32).toFixed(2) : temperature;

  return (
    <TemperatureContext.Provider value={{
      unit,
      temperature,
      celsius,
      farenheit,
      changeInCelsius,
      changeInFarenheit
    }}>
      {children}
    </TemperatureContext.Provider>
  );
};

