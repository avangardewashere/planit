import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { ProgressCircle } from "antd-mobile";

interface CardComponentProps {
  type?: "challenge" | "task";
  subject?: string;
  img: string;
  details?: string;
}
interface IconHandlerProps {
  type?: "challenge" | "task";
  img?: string;
}

const CardComponent: React.FC<CardComponentProps> = memo((props) => {
  const { type = "challenge" , subject, img, details } = props;
  return (
    <div className={clsx(style.container)}>
      <IconHandler img={img} type={type} />
      <div className={clsx(style.body)}>
        <div className={clsx(style.subject)}>{subject || "sample"}</div>
        <div className={clsx(style.details)}>
          {details || "00:00:00 time left for this"}
        </div>
      </div>
      <div className={clsx(style.joiners)}>
        <div className={clsx(style.joinersPhoto)}>
          <div className={clsx("image")}></div>
        </div>
        <div className={clsx(style.joinersDetails)}>2 friends joined</div>
      </div>
    </div>
  );
});

const IconHandler: React.FC<IconHandlerProps> = memo((props) => {
  const { type } = props;
  return (
    <>
      {type === "challenge" ? (
        // <img src="" alt="" />
		<div className={clsx("image")}></div>
      ) : (
        <ProgressCircle>
          <img src="" alt="" />
        </ProgressCircle>
      )}
    </>
  );
});

export default CardComponent;
