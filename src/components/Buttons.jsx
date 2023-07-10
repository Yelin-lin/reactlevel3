import React from 'react';
import { ButtonCol } from '../styles/App.style';
import Button from './Button';
import { ChevronRightIcon, HeartIcon } from './Icons';

function Buttons() {
  return (
    <ButtonCol>
      <h1>Button</h1>
      <Button color="rgb(85, 239, 196)" largeText="Primary" textColor="black" buttonLabel={ChevronRightIcon} />
      <Button color="rgb(250, 177, 160)" largeText="Negative" textColor="rgb(214, 48, 49)" buttonLabel={HeartIcon} />
    </ButtonCol>
  );
}

export default Buttons;
