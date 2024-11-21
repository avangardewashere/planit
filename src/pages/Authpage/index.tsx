import { memo, useRef } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import SectionName from "../../component/SectionName";
import { useNavigate } from "react-router-dom";
import InputV1 from "../../component/interactive/inputv1";
import { Swiper, SwiperRef } from "antd-mobile";
import { useMemoizedFn } from "ahooks";

const AuthPage = memo(() => {
  const swiperRef = useRef<SwiperRef>(null);
  const navigate = useNavigate();
  const handleNavBack = () => {
    navigate("/");
  };

  const handleNextStep = useMemoizedFn(() => {
    swiperRef.current?.swipeNext();
  });

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
      <SectionName navBack={handleNavBack} section="Create an Account" />
      <div className={clsx(style.areas)}>
        <Swiper ref={swiperRef} indicator={false} allowTouchMove={false}>
          <Swiper.Item>
            {" "}
            <div className={clsx(style.formArea)}>
              <InputV1 label={"Email"} />
              <InputV1 label={"Password"} />
              <InputV1 label={"Birthday"} />
            </div>
          </Swiper.Item>
          <Swiper.Item>
            {" "}
            <div className={clsx(style.formArea)}>
              <InputV1 label={"Email"} />
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

export default AuthPage;
