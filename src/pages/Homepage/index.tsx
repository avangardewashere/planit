import { memo, useState } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import calendarImg from "@/assets/images/header/calendar.png";
import bellImg from "@/assets/images/header/bell.png";

const Homepage = memo(() => {
  const [type, setType] = useState(false);
  const handleType = () => {
    setType(!type);
  };
  const handleCalendar  = () =>{
    alert("calendar")
  }
  const handleBell  = () =>{
    alert("Bell")
  }


  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.header)}>
        <div className={clsx(style.actionButtons)}>
          <img onClick={handleCalendar} src={calendarImg} alt="planit-calendar-icon" />
          <img onClick={handleBell}src={bellImg} alt="planit-bell-icon" />
    
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

        <div className={clsx(style.switch)} onClick={handleType}>
          <div
            className={clsx(style.floatSwitch, type && style.animateSwitch)}
          ></div>
          <div
            className={clsx(style.sbutton)}
            style={{ color: type ? "" : "#00a6ff" }}
          >
            Today
          </div>
          <div
            className={clsx(style.sbutton)}
            style={{ color: type ? "#00a6ff" : "" }}
          >
            Clubs
          </div>
        </div>
      </div>
    </div>
  );
});

export default Homepage;
