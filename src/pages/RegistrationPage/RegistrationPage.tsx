
import { ForgotStyle } from "../../components/UI/ForgotPassword/ForgotPs.style";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";


export const RegistrationPage = ()=>{
    return(
        <ForgotStyle>
            <div className="bgcPassword">
            <div className="passwordcard">
        <Input placeholder="Введите свою почту"/>
        <Input placeholder="Придумайте пароль"/>
        <Input placeholder="Повторите пароль"/>
        <Button isPrimary={true} buttonText="Далее" type="submit" className="forgotbtn" to="/"/>
        </div>
        </div>
       
        </ForgotStyle>
    )
}