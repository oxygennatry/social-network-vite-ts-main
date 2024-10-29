import { Container } from "../../components/UI/Container/Container.style";
import { Registration } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyleLoginPage } from "./LoginPage.style";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {changeUser} from "../../store/userSlice"
import { useEffect } from "react";


const mockeUser = {
  name: "igor",
  mail: "igor@gmail.com",
  user_id:1,
  phone_number: "998885442310",
  reg_date: new Date(),
  user_city: "Almalyk",
};

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const loginFormScheme = yup.object({
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Неверный формат почты"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать не менее 4 символов"),
});

export const LoginPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = () => {
    dispatch(changeUser(mockeUser))
  };

  useEffect(()=>{
    navigate("/profile-page")
  },[user])

  return (
    <Container>
      <StyleLoginPage>
        <Heading headingText="Вход" />
        <form onSubmit={handleSubmit(onLoginSubmit)} action="#">
          {/* Контроллер для поля userEmail */}
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Email"
                isError={!!errors.userEmail}
                errorMessage={errors.userEmail?.message}
              />
            )}
          />

          {/* Контроллер для поля userPassword */}
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                placeholder="Пароль"
                isError={!!errors.userPassword}
                errorMessage={errors.userPassword?.message}
              />
            )}
          />

          <Button isPrimary buttonText="Войти" type="submit" />
        </form>
        <Link to="/password-page">Забыли пароль?</Link>
        <Registration />
      </StyleLoginPage>
    </Container>
  );
};
