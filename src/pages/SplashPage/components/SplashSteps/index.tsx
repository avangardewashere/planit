import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import illusImg from "./../../../../assets/images/splash/Illustration.png";

interface SplashSteps {
	imgSrc?:string;
	capTitle?:string;
	capDetails?:string;
	imgWidth?:number;
	imgHeight?:number;
}


const SplashSteps = memo((props:SplashSteps) => {
	const {imgSrc,capTitle,capDetails,imgWidth,imgHeight} = props;
  return (
    <div className={clsx(style.container)}>
      <img
        className={clsx(style.illustration)}
        src={imgSrc || illusImg}
		style={{width:imgWidth || 0,height:imgHeight || 0}}
        alt="plan-it-illustration"
      />
      <div className={clsx(style.caption)}>
        <b>{capTitle  || "Stay Together and Strong"}</b>
        <p>
          {capDetails || "Find friends to discuss common topics. Complete challenges together."}
        </p>
      </div>
    </div>
  );
});

export default SplashSteps;
