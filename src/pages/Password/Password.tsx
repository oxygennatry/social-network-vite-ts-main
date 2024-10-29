import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { PasswordInfo } from "../../components/UI/ForgotPassword/ForgotPassword";
import { ForgotStyle } from "../../components/UI/ForgotPassword/ForgotPs.style";

export const Password = ()=>{
    return(

        
        
            <ForgotStyle>
            <div className="bgcPassword">
                <div className="passwordcard">
            <PasswordInfo/>
            <Input placeholder="+998 9-  ---  --  --"/>
            <Button  isPrimary buttonText="Отправить" type="submit" className="forgotbtn" to="/registration-page"/>
            </div>
            </div>
            </ForgotStyle>
        
    )
}