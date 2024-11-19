import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

interface LogButton {
  imgSrc: string;
  text:string;
  action:()=>void;
}

const logButton = memo((props:LogButton) => {
	const {imgSrc, text,action} = props;
	const handleAction = () => {
		action?.()
	}
  return (
    <div className={clsx(style.container)} onClick={handleAction}>
      <img src={imgSrc && ""} alt="log-buttons" />
	  <span>{text && "log-in"}</span>
    </div>
  );
});

export default logButton;
