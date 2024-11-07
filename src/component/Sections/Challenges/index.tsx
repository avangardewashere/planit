import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import SectionName from "../../SectionName";
import ChallengeCard from "../../../component/CardComponent/Challenge";

const Challenge = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <SectionName
        section={"Challenges"}
        viewAll={() => alert("view ALl")}
      />
	    <ChallengeCard />
    </div>
  );
});

export default Challenge;
