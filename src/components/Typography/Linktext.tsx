import { Link } from "react-router-dom";

type TLinkText = {
    text: string;
    path: string; 
  };
  
  export const LinkText = ({ text, path }: TLinkText) => {
    return <Link to={path}>{text}</Link>; 
  };
  
  