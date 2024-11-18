import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import SplashIntro from "./components/intro";

const Splash = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <SplashIntro />
    </div>
  );
});

export default Splash;
