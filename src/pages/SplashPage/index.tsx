import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import logo from "./../../assets/images/splash/plan-it.png";
import splashBg from "./../../assets/images/splash/splashBG.png";
const Splash = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.splashIntro)}>
        <div className={style.logo}>
          <img src={logo} alt="plan-it-logo" />
          <span>PlanIT</span>
        </div>
        <img
          className={clsx(style.splashBg)}
          src={splashBg}
          alt="splash-background-plan-it"
        />
      </div>
    </div>
  );
});

export default Splash;
