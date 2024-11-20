import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import chevImg from "./../../assets/images/common/chevron.png"
interface SectionNameProps {
  section?: string;
  viewAll?: () => void;
  navBack?: () => void;
}

const SectionName: React.FC<SectionNameProps> = memo((props) => {
  const { section, viewAll,navBack } = props;

  const handleViewAll = () => {
    if (!viewAll) return;

    viewAll?.();
  };

  const handleNavigateBack = () =>{
    navBack?.()
  }

  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.chevron)} onClick={handleNavigateBack}>
        <img src={chevImg} alt="plan-it-back-button" />
      </div>
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
