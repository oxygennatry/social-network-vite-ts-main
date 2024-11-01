import styled, { css } from "styled-components";
interface StyledButtonProps{
  isPrimary?:boolean
}

export const SButton = styled.button<StyledButtonProps>`
    width: 100%;
    margin-bottom: 30px;
  cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;
  background-color: ${props=> props.theme.colors.primecolor};
  color: white;
  transition: 200ms;

  &:disabled {
    background-color: ${props=> props.theme.colors.disabledbgc};
    text-decoration: none;
  }

  ${(props)=>
  props.isPrimary 
  ? css`
  background-color:${props=> props.theme.colors.primecolor};
  color: white;
  text-decoration: none;
    `
    
  : css `
  background-color: ${props=> props.theme.colors.lightgray};
    color: ${props=> props.theme.colors.placeholdercolor};
    text-decoration: none;
  `}

  &.primary {
    
  }

  &.secondary {
    background-color: ${props=> props.theme.colors.lightgray};
    color: ${props=> props.theme.colors.placeholdercolor};
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
    text-decoration: none;
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
    font-style:none;
    text-decoration: none;
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
    text-decoration: none;
  }


  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;

  @media (max-width: 730px) {
  
  padding: 10px 12px;
}

`