import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
import SectionName from '../../component/SectionName';

const AuthPage = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <SectionName section='Continue with Email' />
	</div>
  );
});

export default AuthPage;