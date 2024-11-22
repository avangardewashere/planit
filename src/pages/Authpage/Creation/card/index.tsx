import { memo, useState } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import sample from "./../../../../assets/images/footer/discover.png"
import { useMemoizedFn } from "ahooks";

interface CardProps {
	imgSrc?:string;
	cardName?:string;
	isSelected?:boolean;
	select?:(data:boolean )=>void;
}

const Card = memo((props:CardProps) => {
	const {imgSrc,cardName,isSelected,select} = props;
	const [selected,setSelected] = useState(false);
	const handleSelection = useMemoizedFn(()=>{
		setSelected(!selected);

		select?.(isSelected ?? false)

	})
  // 160 x 134 sixe
  return (
    <div onClick={handleSelection} className={clsx(style.container)}>
		<img src={imgSrc ?? sample} alt="" />
      <span>{cardName ?? "Card"}</span>
    </div>
  );
});

export default Card;
