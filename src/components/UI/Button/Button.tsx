import React from 'react';
import { Link } from 'react-router-dom'; // Для перехода между страницами
import { SButton } from "./Button.style";

interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isPrimary?: boolean;
  to?: string; 
};

export const Button = ({ buttonText, isPrimary, to, ...props }: TButton) => {
  if (to) {
    return (
      <Link to={to}>
        <SButton isPrimary={isPrimary} {...props}>
          {buttonText}
        </SButton>
      </Link>
    );
  }

  
  return (
    <SButton isPrimary={isPrimary} {...props}>
      {buttonText}
    </SButton>
  );
};

