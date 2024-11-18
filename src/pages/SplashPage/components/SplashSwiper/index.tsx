import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
import { Swiper } from 'antd-mobile';
import SplashSteps from '../SplashSteps';

const SplashSwiper = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <Swiper>
		<Swiper.Item>
		 <SplashSteps/>
		</Swiper.Item>
	  </Swiper>
	</div>
  );
});

export default SplashSwiper;