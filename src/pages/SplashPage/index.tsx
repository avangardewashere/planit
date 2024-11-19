import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
// import SplashIntro from "./components/intro";
import SplashSwiper from "./components/SplashSwiper";
import SplashActions from "./components/ActionButtons";

const Splash = memo(() => {
  return (
    <div className={clsx(style.container)}>
      {/* <SplashIntro /> */}
      <SplashSwiper />
	  <SplashActions />
    </div>
  );
});

export default Splash;
