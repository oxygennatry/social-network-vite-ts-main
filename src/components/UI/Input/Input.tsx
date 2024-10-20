// import React from "react";
// import { StyleInput } from "./input.style";
// import { ErrorMassage } from "./input.style";


// interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
//     errorText?:string
//     isError:boolean
// }

// export const Input = ({
//     type,
//     placeholder,
//     isError,
//     ...props
// };IInput) =>  {
//         return( 
//             <div className="">
//                 <StyleInput $isError = {isError} type={type} placeholder={placeholder}/>
//                 {isError && <ErrorMassage>{errorText}</ErrorMassage>}
//             </div>
//         )
// };

import { ErrorMassage } from "./input.style";
import { StyleInput } from "./input.style";
 
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> { 
  errorMessage?: string; 
  isError?: boolean; 
} 
 
export const Input = ({ 
  type, 
  placeholder, 
  errorMessage, 
  isError, 
  ...props 
}: IInputProps) => { 
  return ( 
    <div className="InputContainer"> 
      <StyleInput 
        type={type} 
        $isError={isError || false} 
        placeholder={placeholder} 
        {...props} 
      /> 
      {isError && <ErrorMassage>{errorMessage}</ErrorMassage>} 
    </div> 
  ); 
};
