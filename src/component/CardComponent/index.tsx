import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { ProgressBar, ProgressCircle } from "antd-mobile";

interface CardComponentProps {
  type?: "challenge" | "task";
  subject?: string;
  img?: string;
  details?: string;
}
interface IconHandlerProps {
  type?: "challenge" | "task";
  img?: string;
}

const CardComponent: React.FC<CardComponentProps> = memo((props) => {
  const { type = "challenge", subject, img, details } = props;
  return (
    <div className={clsx(style.container,type ==="challenge" && style.chalPadding)}>
      <IconHandler img={img} type={type} />
      <div className={clsx(style.body)}>
        <div className={clsx(style.subject)}>{subject || "sample"}</div>
        <div className={clsx(style.details)}>
          {details || "00:00:00 time left for this"}
        </div>
      </div>
      <div className={clsx(style.joiners,type==="task" &&style.taskJoiners)}>
        <div className={clsx(style.joinersPhoto)}>
          <div className={clsx("image")}></div>
        </div>
        {type ==="challenge" &&<div className={clsx(style.joinersDetails)}>2 friends joined</div>}
        {type ==="task" &&<div className={clsx(style.joinButton)}>+</div>}
      </div>
      {type === "challenge" && <ProgressBar style={{'--track-width':"4rem"}} className={clsx(style.challengeProgress)} percent={25} />}
    </div>
  );
});

const IconHandler: React.FC<IconHandlerProps> = memo((props) => {
  const { type } = props;
  return (
    <>
      {type === "challenge" ? (
        // <img src="" alt="" />
        <div className={clsx("image", style.challengeImg)}></div>
      ) : (
        <ProgressCircle className={clsx(style.taskProgress)} style={{'--size':"30rem"}}>
          {/* <img src="" alt="" /> */}
		  <div className={clsx("image", style.taskImage)}></div>
        </ProgressCircle>
      )}
    </>
  );
});

export default CardComponent;
