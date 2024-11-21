import { memo,  useState } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { useMemoizedFn } from "ahooks";
import clearImg from "../../../assets/images/common/clear-image.png";

interface InputV1Props {
  label?: string;
  action?: () => void;
}

const InputV1 = memo((props: InputV1Props) => {
  const { label, action } = props;
  const [value, setValue] = useState("");

  const handleOnChange = useMemoizedFn(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      action?.();
    }
  );

  const handleInputClearing = useMemoizedFn(() => {
    setValue("");
  });

  return (
    // 72 * 345
    // 48 * 345
    <div className={clsx(style.container)}>
      {" "}
      <span>{label ?? "label"}</span>
      <input
        type="text"
        onChange={handleOnChange}
        value={value}
        placeholder={`Enter the ${label ?? label}`}
      />
      {value !== "" && (
        <img
          src={clearImg}
          alt="clear-input-image-plan-it"
          className={clsx(style.clearImage)}
          onClick={handleInputClearing}
        />
      )}
    </div>
  );
});

export default InputV1;
