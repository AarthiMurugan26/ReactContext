
import React from 'react';
import './App.css';
import { TemperatureInput } from './TemperatureInput';
import {BoilingState} from './BoilingState';


export const TemperatureCalculator = () => {
  return (
    <div>
      <TemperatureInput unit='Celsius' />
      <TemperatureInput unit='Fahrenheit' />
      <BoilingState />
    </div>
  );
};