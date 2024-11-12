import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const CreationPage = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <span>CreationPage</span>
	</div>
  );
});

export default CreationPage;