import { Header } from "../../components/UI/Header/Header";
import "./ProfilePage.scss";
import { Container } from "../../components/UI/Container/Container.style";
import { LeftSide } from "../../components/UI/ProfileLeftSide/LeftSideProfile";
import { ProfileHeader } from "../../components/UI/ProfileHeader/ProfileHeader";
import { MainProfile } from "../../components/UI/MainProfile/Main";
import { RightSideProfile } from "../../components/UI/RightSideProfile/RightSideProfile";
import { ProfieStyle } from "./ProfilePage.style";





export const ProfilePage = () => {
  return (
    <Container>
      <ProfieStyle>
      <Header/>
      <div className="ProfilePage">
      <LeftSide/>
      <ProfileHeader/>
      <MainProfile/>
      <RightSideProfile/>
    </div>
    </ProfieStyle>
    </Container>
  );
};
