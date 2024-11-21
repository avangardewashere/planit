import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import SectionName from "../../../component/SectionName";
import InputV1 from "../../../component/interactive/inputv1";



const Loginpage = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <SectionName navBack={()=>{}} section="Continue with Email" />
      <div className={clsx(style.areas)}>
        <div className={clsx(style.formArea)}>
          <InputV1 label={"Email"} />
          <InputV1 label={"Password"} />
        </div>
        <div className={clsx(style.actionArea)}>
          <span>Don't have an account Yet</span>
          <div className={clsx(style.loginSubmit)}>Log-in</div>
        </div>
      </div>
    </div>
  );
});

export default Loginpage;
