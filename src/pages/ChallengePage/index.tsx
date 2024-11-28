import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const ChallengePage = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <span>ChallengePage</span>
	</div>
  );
});

export default ChallengePage;