import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { Swiper } from "antd-mobile";

const DateSwiper = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <Swiper slideSize={15}indicator={false}>
        <Swiper.Item>
          <div className={clsx(style.dayCard)}>
            <div className={clsx(style.date)}>4</div>
            <div className={clsx(style.day)}>Mon</div>
          </div>
        </Swiper.Item>
		<Swiper.Item>
          <div className={clsx(style.dayCard)}>
            <div className={clsx(style.date)}>4</div>
            <div className={clsx(style.day)}>Mon</div>
          </div>
        </Swiper.Item>
		<Swiper.Item>
          <div className={clsx(style.dayCard)}>
            <div className={clsx(style.date)}>4</div>
            <div className={clsx(style.day)}>Mon</div>
          </div>
        </Swiper.Item>
		<Swiper.Item>
          <div className={clsx(style.dayCard)}>
            <div className={clsx(style.date)}>4</div>
            <div className={clsx(style.day)}>Mon</div>
          </div>
        </Swiper.Item>
		<Swiper.Item>
          <div className={clsx(style.dayCard)}>
            <div className={clsx(style.date)}>4</div>
            <div className={clsx(style.day)}>Mon</div>
          </div>
        </Swiper.Item>
		<Swiper.Item>
          <div className={clsx(style.dayCard)}>
            <div className={clsx(style.date)}>4</div>
            <div className={clsx(style.day)}>Mon</div>
          </div>
        </Swiper.Item>
		<Swiper.Item>
          <div className={clsx(style.dayCard)}>
            <div className={clsx(style.date)}>4</div>
            <div className={clsx(style.day)}>Mon</div>
          </div>
        </Swiper.Item>
		<Swiper.Item>
          <div className={clsx(style.dayCard)}>
            <div className={clsx(style.date)}>4</div>
            <div className={clsx(style.day)}>Mon</div>
          </div>
        </Swiper.Item>
		<Swiper.Item>
          <div className={clsx(style.dayCard)}>
            <div className={clsx(style.date)}>4</div>
            <div className={clsx(style.day)}>Mon</div>
          </div>
        </Swiper.Item>
		<Swiper.Item>
          <div className={clsx(style.dayCard)}>
            <div className={clsx(style.date)}>4</div>
            <div className={clsx(style.day)}>Mon</div>
          </div>
        </Swiper.Item>
      </Swiper>
    </div>
  );
});

export default DateSwiper;
