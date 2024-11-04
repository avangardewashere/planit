import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import SectionName from "../../SectionName";
import CardComponent from "../../CardComponent";

const Challenge = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <SectionName
        section={"Challenges"}
        viewAll={() => alert("view ALl")}
      />
	  <CardComponent img={""} />  
    </div>
  );
});

export default Challenge;
