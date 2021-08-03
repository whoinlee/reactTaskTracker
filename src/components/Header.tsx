import React from 'react';
//-- Component
import Button from './Button';
//-- Styles
import { Wrapper } from './Header.styles';


type Props = {
    title: string;
    onAdd: () => void;
    showAdd: boolean;
}
const Header:React.FC<Props> = ({ title, onAdd, showAdd }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <Button text={showAdd ? 'Close' : 'Add'} 
              color={showAdd ? 'red': 'green'} 
              onClick={onAdd} 
      />
    </Wrapper>
  )
}

export default Header
