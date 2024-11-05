import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const Footer = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <span>Footer</span>
	</div>
  );
});

export default Footer;