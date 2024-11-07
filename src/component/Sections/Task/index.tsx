import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import SectionName from "../../SectionName";
 
import TaskCard from "../../../component/CardComponent/Task";

const TaskSection = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <SectionName section={"Tasks"} viewAll={() => alert("view ALl")} />
      <TaskCard />
    </div>
  );
});

export default TaskSection;
