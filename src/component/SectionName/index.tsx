import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

interface SectionNameProps {
  section?: string;
  viewAll?: () => void;
}

const SectionName: React.FC<SectionNameProps> = memo((props) => {
  const { section, viewAll } = props;

  const handleViewAll = () => {
    if (!viewAll) return;

    viewAll();
  };

  return (
    <div className={clsx(style.container)}>
      <span>{section}</span>
      {viewAll && (
        <div className={clsx(style.viewAll)} onClick={handleViewAll}>
          View All
        </div>
      )}
    </div>
  );
});

export default SectionName;
