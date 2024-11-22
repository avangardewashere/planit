import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const Card = memo(() => {
	// 160 x 134 sixe
  return (
	<div className={clsx(style.container)}>
	  <span>Card</span>
	</div>
  );
});

export default Card;