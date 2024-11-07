import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { ProgressCircle } from "antd-mobile";
interface CardComponentProps {
  subject?: string;
  img?: string;
  details?: string;
}
const TaskCard: React.FC<CardComponentProps> = memo((props) => {
  const { subject, details } = props;
  return (
    <div className={clsx(style.container)}>
      <ProgressCircle
        className={clsx(style.taskProgress)}
        style={{ "--size": "30rem" }}
      >
        {/* <img src="" alt="" /> */}
        <div className={clsx("image", style.taskImage)}></div>
      </ProgressCircle>
      <div className={clsx(style.body)}>
        <div className={clsx(style.subject)}>{subject || "sample"}</div>
        <div className={clsx(style.details)}>
          {details || "00:00:00 time left for this"}
        </div>
      </div>
      <div className={clsx(style.joiners, style.taskJoiners)}>
        <div className={clsx(style.joinersPhoto)}>
          <div className={clsx("image")}></div>
        </div>

        <div className={clsx(style.joinButton)}>
          <span>+</span>
        </div>
      </div>
    </div>
  );
});

export default TaskCard;
