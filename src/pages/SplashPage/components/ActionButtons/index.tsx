import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import LogButton from "./button";
import emailImg from "./../../../../assets/images/splash/emailLogin.png";
import appleImg from "./../../../../assets/images/splash/Apple.png";
import googleImg from "./../../../../assets/images/splash/GoogleIcon.png";
import facebookImg from "./../../../../assets/images/splash/facebook.png";

const SplashActions = memo(() => {
  const actionData = [
    {
      id: 101,
      text: "Continue with Email",
      imgSrc: emailImg,
      action: () => {
        console.log("hello");
      },
    },
    {
      id: 102,
      text: "Apple ID",
      imgSrc: appleImg,
      action: () => {
        console.log("hello");
      },
    },
    {
      id: 102,
      text: "Google",
      imgSrc: googleImg,
      action: () => {
        console.log("hello");
      },
    },
    {
      id: 101,
      text: "Facebook",
      imgSrc: facebookImg,
      action: () => {
        console.log("hello");
      },
    },
  ];

  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.splashActions)}>
        {actionData?.map((item, index) => {
          return (
            <LogButton key={index} imgSrc={item.imgSrc} text={item.text} />
          );
        })}
      </div>
      <span className={clsx(style.terms)}>By continuing you agree Terms of Services & Privacy Policy</span>
    </div>
  );
});

export default SplashActions;
