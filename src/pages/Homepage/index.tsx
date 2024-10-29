import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
const Homepage = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.header)}>
        <div className={clsx(style.actionButtons)}>
          <div className={clsx(style.image, "image")}>hi</div>
          <div className={clsx(style.image, "image")}>hi</div>
        </div>

        <div className={clsx(style.greetings)}>
          <div className={clsx(style.greet)}>
            <b>Hi, Mert</b>
            <span>What are you planning today</span>
          </div>
          <div className={clsx(style.mood)}>
            <div className={clsx(style.emoji)}>😇</div>
          </div>
        </div>

        {/* <div className={clsx(style.switch)}>
          <div className={clsx(style.image, "image")}>today</div>
          <div className={clsx(style.image, "image")}>clubs</div>
        </div> */}
      </div>
    </div>
  );
});

export default Homepage;
