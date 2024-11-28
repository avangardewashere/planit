import AuthPage from "../pages/Authpage"
import Homepage from "../pages/Homepage"
import Splash from "../pages/SplashPage"

 
const routes = [
 
  {
    path: "*",
    element: <Splash/>,
  },
  {
    path: "/home",
    element: <Homepage/>,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/challenges",
    element: <AuthPage />,
  },

]
export default routes
