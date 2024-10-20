import styled, { css } from "styled-components";

export const ErrorMassage = styled.p`
  color: ${(props) => props.theme.colors.red}; 
  margin-top: 10px;
`;

interface SInterfaceProps {
  $isError?: boolean;
}


 
export const StyleInput = styled.input<SInterfaceProps>`
   display: block;
   width: 100%;
   margin-bottom: 20px;
   border: 2px solid ${props =>props.theme.colors.disabledbgc};
   background-color: transparent;

   &:last-child {
     margin-bottom: 40px;
   }

   border: 1px solid transparent;
 outline: 0;
 font-family: inherit;
padding: 12px 15px;
background-color: ${(props) => props.theme.colors.bgc};
border-radius: 10px;
border:1px solid transparent;
transition: 200ms;
border: 2px solid ${(props) => props.theme.colors.disabledbgc};

   &:is(:hover, :focus) {
     border-color: ${props =>props.theme.colors.primecolor};
   }

   ${(props) => 
props.$isError && 
css`
border: 1px solid ${(props) => props.theme.colors.red};
color:${(props) => props.theme.colors.red} ;
`}
 



 @media (max-width: 730px) {
 
   padding: 10px 12px;
 }


`