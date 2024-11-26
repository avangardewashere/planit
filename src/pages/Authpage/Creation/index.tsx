import { memo, useRef } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import InputV1 from "../../../component/interactive/inputv1";
import { Swiper, SwiperRef } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { useMemoizedFn } from "ahooks";
import SectionName from "../../../component/SectionName";
import SplashCard from "./card";

const CreationArea = memo(() => {
  const swiperRef = useRef<SwiperRef>(null);
  const navigate = useNavigate();
  const handleNavBack = useMemoizedFn(() => {
    navigate("/");
  });

  const handleNextStep = useMemoizedFn(() => {
    swiperRef.current?.swipeNext();
  });

  const genderSection = [
    {
      id: 2011,
      icon: "👦🏻",
      text: "Male",
    },
    {
      id: 2012,
      icon: "👧🏻",
      text: "Female",
    },
  ];
  return (
    <div className={clsx(style.container)}>
      <SectionName navBack={handleNavBack} section="Create an Account" />
      <div className={clsx(style.areas)}>
        <Swiper ref={swiperRef} indicator={false} allowTouchMove={false}>
          <Swiper.Item>
            <div className={clsx(style.formArea)}>
              <InputV1 label={"Email"} />
              <InputV1 label={"Password"} />
              <InputV1 label={"Birthday"} />
            </div>
          </Swiper.Item>
          <Swiper.Item>
            {" "}
            <div className={clsx(style.formAreaGrid)}>
             {genderSection.map((item)=>{
              return(
                <SplashCard key={item.id} imgSrc={item.icon} cardName={item.text}/>
              )
             })}
            
            </div>
          </Swiper.Item>
          <Swiper.Item>
            {" "}
            <div className={clsx(style.formArea)}>
              <InputV1 label={"Email"} />
              <InputV1 label={"Password"} />
            </div>
          </Swiper.Item>
        </Swiper>
        <div className={clsx(style.actionArea)}>
          <div onClick={handleNextStep} className={clsx(style.loginSubmit)}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
});

export default CreationArea;
