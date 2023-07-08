import React from 'react'
import { SelectContainer, SelectRow } from '../styles/App.style'
import Select from './Select'

function Selects() {
  return (
    <SelectContainer>
        <h1>Select</h1>
        <SelectRow>
          <Select selectPosition="absolute"/>
          <Select selectPosition="relative"/>
        </SelectRow>
    </SelectContainer>
  )
}

export default Selects