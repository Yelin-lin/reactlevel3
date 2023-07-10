import React, { useState } from 'react'
import { SelectBackground, SelectButton, SelectItem, SelectItemContainer, SelectList,  } from '../styles/App.style'
import { CaretDownIcon } from './Icons'

function Select({selectPosition}) {
    const [selectListModalOpen, setSelectListModalOpen] = useState(false);
    const [selectItem, setSelectItem] = useState(null)


    const openSelectListModal = () => setSelectListModalOpen(true);
    const closeSelectListModal = () => setSelectListModalOpen(false);
    
    const programingNames = [
        {id:0, name: "리액트"},
        {id:1, name: "자바"},
        {id:2, name: "스프링"},
        {id:3, name: "리액트 네이티브"},
    ]

    const handleItemClick = (name) =>{
        setSelectItem(name);
        closeSelectListModal()
    }

  return (
    <SelectItemContainer>
        <SelectBackground $isOpen={selectListModalOpen} onClick={closeSelectListModal} />
        <SelectButton onClick={openSelectListModal}>
            <div>{selectItem || programingNames[0].name}</div>
            <div>{CaretDownIcon}</div>
        </SelectButton>
        <SelectList $isOpen={selectListModalOpen} $selectPosition={selectPosition}>
            {programingNames.map((item)=>(
                <SelectItem key={item.id} onClick={()=>handleItemClick(item.name)}>
                    {item.name}
                </SelectItem>
            ))}
        </SelectList>
    </SelectItemContainer>
  )
}

export default Select