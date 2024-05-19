// TemperatureInput.js
import React from 'react';
import './App.css';
import { TemperatureContext } from './context';

export const TemperatureInput = ({ unit }) => {
    const { celsius, farenheit, changeInCelsius, changeInFarenheit } = React.useContext(TemperatureContext);
  
    const temperature = unit === 'Celsius' ? celsius : farenheit;
    const onChangeOfTemp = (event) => {
      unit === 'Celsius' ? changeInCelsius(event.target.value) : changeInFarenheit(event.target.value);
    };
  
    return (
      <fieldset>
        <legend>Enter Temperature In {unit}</legend>
        <input value={temperature} onChange={onChangeOfTemp} />
      </fieldset>
    );
  };
