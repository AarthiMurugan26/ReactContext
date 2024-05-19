
import React from 'react';
import { TemperatureContext } from './context';
export const BoilingState = () => {
    const { celsius } = React.useContext(TemperatureContext);
    return (
      <p>{celsius >= 100 ? "The Water Will Boil" : "The Water Will Not Boil"}</p>
    );
  };