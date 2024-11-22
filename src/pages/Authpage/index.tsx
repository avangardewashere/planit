import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import CreationArea from "./Creation";

const AuthPage = memo(() => {
  return (
    <div className={clsx(style.container)}>
      {/* <SectionName navBack={handleNavBack} section="Continue with Email" />
      <div className={clsx(style.areas)}>
        <div className={clsx(style.formArea)}>
          <InputV1 label={"Email"} />
          <InputV1 label={"Password"} />
        </div>
        <div className={clsx(style.actionArea)}>
          <span>Don't have an account Yet</span>
		  <div className={clsx(style.loginSubmit)}>
			Log-in
		  </div>
        </div>
      </div> */}
	  <CreationArea />
    </div>
  );
});

export default AuthPage;
