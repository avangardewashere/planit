import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { ProgressBar } from "antd-mobile";
interface CardComponentProps {
  subject?: string;
  img?: string;
  details?: string;
}

const ChallengeCard: React.FC<CardComponentProps> = memo((props) => {
  const { subject, details } = props;
  return (
    <div className={clsx(style.container, style.chalPadding)}>
      <div className={clsx("image", style.challengeImg)}></div>
      <div className={clsx(style.body)}>
        <div className={clsx(style.subject)}>{subject || "sample"}</div>
        <div className={clsx(style.details)}>
          {details || "00:00:00 time left for this"}
        </div>
      </div>

      <ProgressBar
        style={{ "--track-width": "4rem" }}
        className={clsx(style.challengeProgress)}
        percent={25}
      />
    </div>
  );
});

export default ChallengeCard;
