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

]
export default routes
