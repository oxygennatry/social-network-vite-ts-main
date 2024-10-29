import { Header } from "../../components/UI/Header/Header";
import "./MainPage.scss";
import { Container } from "../../components/UI/Container/Container.style";
import { LeftSideMain } from "../../components/UI/Main/LeftSide";
import { MainSide } from "../../components/UI/Main/mainside";
import { RightSideMain } from "../../components/UI/Main/rigthtSide";

export const MainPage = () => {
  return (
    <Container>
      <Header/>
      <div className="MainPage">
      <LeftSideMain/>
      <MainSide/>
      <RightSideMain/>
    </div>
    </Container>
  );
};
