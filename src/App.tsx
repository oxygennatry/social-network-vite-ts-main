import { Registration } from "./components/UI/RegistrationInfo/RegistrationInfo";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Password } from "./pages/Password/Password";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";

function App() {

  const config = createBrowserRouter([
    {
      path:"/",
      element:<LoginPage />
    },
    {
      path:"/main-page",
      element:<MainPage/>
    },
    {
      path:"/password-page",
      element:<Password/>
    },
    {
      path:"/profile-page",
      element:<ProfilePage/>
    },
    {
      path:"/registration-page",
      element:<RegistrationPage/>
    },
  ])
  return (
    
      <div className="App">
        <RouterProvider router={config}/>
      </div>
    
  );
}

export default App;
