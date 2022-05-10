import { FC, memo } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
   onClickButton: () => void;
   text: string;
}


export const Button: FC<ButtonProps> = memo(({ onClickButton, text }) => (
   <ButtonBase>
      <button onClick={onClickButton}>
         {text}
      </button>
   </ButtonBase>
))

const ButtonBase = styled.div`
  display:flex
`;