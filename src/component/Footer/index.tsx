import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import homeImg from "./../../assets/images/footer/Home.png";
import discoverImg from "./../../assets/images/footer/discover.png";
import acheiveImg from "./../../assets/images/footer/achievements.png";
import accountImg from "./../../assets/images/footer/Profile.png";
import usePlanStore from "../../store/planStore";
 

const Footer = memo(() => {
   const fModalShowing = usePlanStore((s) => s.fModalShowing);
  const setFModalShowing = usePlanStore((s) => s.setFModalShowing);
  const handleFooterModal = () => {
	setFModalShowing(!fModalShowing)
    alert(`is modal showing: ${fModalShowing}`);
	
  };

  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.icons)}>
        <img src={homeImg} alt="plan-it-footer-icons" />
      </div>
      <div className={clsx(style.icons)}>
        <img src={discoverImg} alt="plan-it-footer-icons" />
      </div>
      <div className={clsx(style.icons)} onClick={handleFooterModal}>
        <div className={clsx(style.plusIcon)}>+</div>
      </div>
      <div className={clsx(style.icons)}>
        <img src={acheiveImg} alt="plan-it-footer-icons" />
      </div>
      <div className={clsx(style.icons)}>
        <img src={accountImg} alt="plan-it-footer-icons" />
      </div>
    </div>
  );
});

export default Footer;
