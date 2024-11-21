import { memo, useState } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { useMemoizedFn } from "ahooks";

interface InputV1Props {
  label?: string;
  action?: ()=>void;
}

const InputV1 = memo((props: InputV1Props) => {
	const {label,action} = props;
  const [value, setValue] = useState("");
  const handleOnChange = useMemoizedFn(
    (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		action?.();
	}
  );

  return (
    <div className={clsx(style.container)}>
      <span>{label ?? 'label'}</span>
	  <input type="text" onChange={handleOnChange} value={value} placeholder={`Enter the ${label ?? label}`} />
    </div>
  );
});

export default InputV1;
