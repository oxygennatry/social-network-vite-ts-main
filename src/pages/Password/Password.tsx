import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Container.style";
import { PasswordInfo } from "../../components/UI/ForgotPassword/ForgotPassword";
import { ForgotStyle } from "../../components/UI/ForgotPassword/ForgotPs.style";

export const Password = ()=>{
    return(

        
        
            <ForgotStyle>
            <div className="bgcPassword">
                <div className="passwordcard">
            <PasswordInfo/>
            <Input/>
            <Button isPrimary buttonText="Отправить" type="submit" className="forgotbtn"/>
            </div>
            </div>
            </ForgotStyle>
        
    )
}