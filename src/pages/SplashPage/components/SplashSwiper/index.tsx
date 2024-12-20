import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { Swiper } from "antd-mobile";
import SplashSteps from "../SplashSteps";
import iluOne from "./../../../../assets/images/splash/Illustration.png";
import iluTwo from "./../../../../assets/images/splash/Illustration2png.png";
import iluThree from "./../../../../assets/images/splash/Illustration3.png";

const SplashSwiper = memo(() => {
  const splashSwipeData = [
    {
      imgSrc: iluOne,
	  imgWidth:350,
	  imgHeight:337,
      capDetails:
        "Change your life by slowly adding new healty habits and sticking to them.",
      capTitle: "Create Good Habits",
    },
    {
      imgSrc: iluTwo,
	  imgWidth:300,
	  imgHeight:320,
      capDetails:
        "Everyday you become one step closer to your goal. Don’t give up!",
      capTitle: "Track Your Progress",
    },
    {
      imgSrc: iluThree,
	  imgWidth:390,
	  imgHeight:300,
      capDetails:
        "Find friends to discuss common topics. Complete challenges together.",
      capTitle: "Stay Together and Strong",
    },
  ];

  return (
    <div className={clsx(style.container)}>
      <Swiper className={clsx(style.splashSwiper)}>
        {splashSwipeData.map((item, index) => (
          <Swiper.Item key={index}>
            <SplashSteps
              imgSrc={item.imgSrc}
              capDetails={item.capDetails}
              capTitle={item.capTitle}
			  imgWidth={item.imgWidth}
			  imgHeight={item.imgHeight}
            />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
});

export default SplashSwiper;
