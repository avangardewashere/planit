import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import SectionName from "../../SectionName";
import CardComponent from "../../CardComponent";

const TaskSection = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <SectionName section={"Tasks"} viewAll={() => alert("view ALl")} />
      <CardComponent type="task" img={""} />
    </div>
  );
});

export default TaskSection;
