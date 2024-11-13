import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
import chevron from "./../../assets/images/common/chevron.png"
interface TabHeaderProps {
  showButton?:boolean;
  headline?:string;
  buttonAction?:()=>void;
}

const TabHeader:React.FC<TabHeaderProps> = memo((props) => {
	const {showButton,headline,buttonAction} =props
	const handleClick =() =>{
		buttonAction?.()
	}
  return (
	<div className={clsx(style.container)}>
		{showButton && <div onClick={handleClick} className={clsx(style.backButton)}>
			<img src={chevron} alt="chevron-img" />
		</div>}
	  <span>{headline ?? ""}</span>
	</div>
  );
});

export default TabHeader;