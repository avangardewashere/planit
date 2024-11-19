import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

const SplashActions = memo(() => {
 
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.mainButton)}>E-mail</div>
      <div className={clsx(style.subButtons)}>
        <div className={clsx(style.methodLogin)}>App</div>
        <div className={clsx(style.methodLogin)}>google</div>
        <div className={clsx(style.methodLogin)}>face</div>
        {/* 
			

			? */}
      </div>
    </div>
  );
});

export default SplashActions;
