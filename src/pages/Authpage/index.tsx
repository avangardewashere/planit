import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
import SectionName from '../../component/SectionName';
import { useNavigate } from 'react-router-dom';

const AuthPage = memo(() => {
	const navigate = useNavigate();
	const handleNavBack = () =>{
		navigate("/")
	}

  return (
	<div className={clsx(style.container)}>
	  <SectionName navBack={handleNavBack} section='Continue with Email' />
	  
	</div>
  );
});

export default AuthPage;