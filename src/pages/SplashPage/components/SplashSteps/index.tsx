import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import illusImg from "./../../../../assets/images/splash/Illustration.png";
const SplashSteps = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <img className={clsx(style.illustration)} src={illusImg} alt="plan-it-illustration" />
      <div className={clsx(style.caption)}>
        <b>Stay Together and Strong</b>
        <p>
          Find friends to discuss common topics. Complete challenges together.
        </p>
      </div>
    </div>
  );
});

export default SplashSteps;
