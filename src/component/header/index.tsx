import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const Header = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <span>Header</span>
	</div>
  );
});

export default Header;