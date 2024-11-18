import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
// import SplashIntro from "./components/intro";
import SplashSwiper from "./components/SplashSwiper";

const Splash = memo(() => {
  return (
    <div className={clsx(style.container)}>
      {/* <SplashIntro /> */}
      <SplashSwiper />
    </div>
  );
});

export default Splash;
