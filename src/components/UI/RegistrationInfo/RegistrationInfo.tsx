import { StyledRegistrationInfo } from "./Registration.styled"
import { Link } from "react-router-dom"

export const Registration = ()=>{
    return(
        <StyledRegistrationInfo>
        <span>
          У вас нет аккаунта? <Link to="/registration-page">Зарегестрироваться</Link>
        </span>
        <p>Войти с помощью</p>
        <div className="icons-wrapper">
          <a className="reg__link google-link" href="#">
            <img src="./img/icons/google.svg" alt="Google" />
          </a>
          <a className="reg__link google-plus-link" href="#">
            <img src="./img/icons/google-plus.svg" alt="Google Plus" />
          </a>
          <a className="reg__link yandex-link" href="#">
            <img src="./img/icons/yandex.svg" alt="Yandex" />
          </a>
          <a className="reg__link mail-ru-link" href="#">
            <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
          </a>
        </div>
        </StyledRegistrationInfo>
   
    
    )
}