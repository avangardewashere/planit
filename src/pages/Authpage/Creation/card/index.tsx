import { memo, useState } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import sample from "./../../../../assets/images/footer/discover.png";
import { useMemoizedFn } from "ahooks";

interface CardProps {
  imgSrc?: string;
  cardName?: string;
  isSelected?: boolean;
  select?: (data: boolean) => void;
  isEmoji?:boolean;
}

const SplashCard = memo((props: CardProps) => {
  const { imgSrc, cardName, isSelected, select ,isEmoji=true} = props;
  
  const [selected, setSelected] = useState(false);
  const handleSelection = useMemoizedFn(() => {
    setSelected(!selected);

    select?.(isSelected ?? false);
  });
  // 160 x 134 sixe
  return (
    <div onClick={handleSelection} className={clsx(style.container,selected&&style.selected)}>
      {!isEmoji && <img src={imgSrc ?? sample} alt="" />  }
      {isEmoji&& <div>{imgSrc}</div>}
      <span>{cardName ?? "Card"}</span>
    </div>
  );
});

export default SplashCard;
