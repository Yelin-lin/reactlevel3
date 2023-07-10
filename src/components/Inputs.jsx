import React, { useState } from 'react';
import { AllButton, AllInput, InputRow } from '../styles/App.style';

function Inputs() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handlePriceChange = (event) => {
        const inputPrice = event.target.value;
        let formattedPrice = inputPrice.replace(/,/g, ""); // 입력된 가격에서 기존 쉼표 제거
        formattedPrice = formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3자리마다 쉼표 추가
        setPrice(formattedPrice);
    };
  
    const handleSubmit = () => {
        name==="" && price===""?
         alert("이름과 가격 모두 입력해주세요")
        : alert(`{name: ${name}, price: ${price.replace(/,/g, '')}}`);
        setName("");
        setPrice("");
    };
  

  return (
    <>
      <h1>Inputs</h1>
      <InputRow>
        <label>이름 &nbsp;<AllInput type="text" value={name} onChange={handleNameChange} /></label>
        <label>가격 &nbsp;<AllInput type="text" value={price} onChange={handlePriceChange} /></label>
        <AllButton $size="mini" $color="rgb(85, 239, 196)" onClick={handleSubmit}>저장</AllButton>
      </InputRow>
    </>
  );
}

export default Inputs;
