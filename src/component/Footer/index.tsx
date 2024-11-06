import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
import homeImg from './../../assets/images/footer/Home.png'
import discoverImg from "./../../assets/images/footer/discover.png"
import acheiveImg from "./../../assets/images/footer/achievements.png"
import accountImg from "./../../assets/images/footer/Profile.png"

const Footer = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <div className={clsx(style.icons)}>
		<img src={homeImg} alt="plan-it-footer-icons" />
	  </div>
	  <div className={clsx(style.icons)}>
		<img src={discoverImg} alt="plan-it-footer-icons" />
	  </div>
	  <div className={clsx(style.icons)}>
		<div className={clsx(style.plusIcon)}>
			+
		</div>
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