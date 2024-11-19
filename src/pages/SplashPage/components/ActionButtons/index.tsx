import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import LogButton from "./button";

const SplashActions = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.mainButton)}>
        <LogButton text="Continue with E-mail" />
      </div>
      <div className={clsx(style.subButtons)}>
        <div className={clsx(style.methodLogin)}>
          <LogButton text="Apple-ID" />
        </div>
        <div className={clsx(style.methodLogin)}>
          <LogButton text="FaceBook" />
        </div>
        <div className={clsx(style.methodLogin)}>
          <LogButton text="Google" />
        </div>
        {/* 
			

			? */}
      </div>
    </div>
  );
});

export default SplashActions;
