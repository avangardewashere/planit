import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
import logo from "./../../assets/images/splash/plan-it.png";
const Splash = memo(() => {
  return (
	<div className={clsx(style.container)}>
	 <div className={style.logo}>
		<img src={logo} alt="plan-it-logo" />
		<span>PlanIT</span>
	 </div>
	  
	</div>
  );
});

export default Splash;