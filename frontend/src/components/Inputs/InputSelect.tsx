import React, { ChangeEvent, FC, ReactElement } from "react";
import { InputSize, InputSizeType } from "./InputTypes";

type InputSelectProps = {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
  error: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
  name: string;
  className?: string;
  size?: InputSizeType;
  Input_className?: string;
  Label_className?: string;
  InputContainer_className?: string;
  MainContainer_className?: string;
  data: { title: string; value: string | number }[];
};

const InputSelect: FC<InputSelectProps> = ({
  onChange,
  value,
  error,
  label,
  placeholder,
  disabled = false,
  name,
  Input_className = "",
  Label_className = "",
  InputContainer_className = "",
  MainContainer_className = "",
  size = "md",
  data,
}): ReactElement => {
  /* function body */
  return (
    <>
      <div className={`w-full my-2 ${MainContainer_className}`}>
        <label
          htmlFor="login-form-email"
          className={`text-primary-900 dark:text-primary-100 ${Label_className}`}
        >
          {label}
        </label>
        <div className={`rounded relative ${InputContainer_className}`}>
          <select
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={`
                     w-full text-lg rounded border-2 
                     ${InputSize(size)}
                     ${
                       error !== ""
                         ? "border-red-500 dark:text-white bg-red-100 dark:bg-red-900 dark:bg-opacity-30"
                         : "border-primary-800 dark:text-white bg-white dark:bg-primary-900 "
                     }
                     px-3 ${Input_className}`}
            value={value}
            disabled={disabled}
            // className="p-2 border-2 bg-white border-primary-900 rounded w-full"
          >
            {data.map((level, i) => (
              <option key={i} value={level.value}>
                {level.title}
              </option>
            ))}
          </select>

          {error !== "" && (
            <p className="text-sm text-red-600 dark:text-red-500">{error}</p>
          )}
        </div>
      </div>
    </>
  );
};
export default InputSelect;
