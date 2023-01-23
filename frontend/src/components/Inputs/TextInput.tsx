import React, { ChangeEvent, useState, FC, ReactElement } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { InputSize, InputSizeType } from "./InputTypes";

type TextInputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  error: string;
  label: string;
  placeholder: string;
  type?: "email" | "password" | "date" | "text" | "number" | "search";
  disabled?: boolean;
  name: string;
  className?: string;
  size?: InputSizeType;
  Input_className?: string;
  Label_className?: string;
  InputContainer_className?: string;
  MainContainer_className?: string;
  max?: number;
};

const TextInput: FC<TextInputProps> = ({
  onChange,
  value,
  error,
  label,
  placeholder,
  type = "text",
  disabled = false,
  name,
  Input_className = "",
  Label_className = "",
  InputContainer_className = "",
  MainContainer_className = "",
  size = "md",
  max,
}): ReactElement => {
  const [showPass, setShowPass] = useState(false);

  /* function body */
  return (
    <>
      <div className={`w-full my-2 ${MainContainer_className}`}>
        {label !== "" && (
          <label
            htmlFor="login-form-email"
            className={`text-primary-900 dark:text-primary-100 ${Label_className}`}
          >
            {label}
          </label>
        )}
        <div className={`rounded relative ${InputContainer_className}`}>
          <input
            type={showPass ? "text" : type}
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
            maxLength={max}
          />

          {type === "password" && (
            <button
              className="absolute -ml-11 p-1 mt-0.5 text-blue-700"
              type="button"
              onClick={setShowPass.bind(this, !showPass)}
            >
              {showPass ? (
                <IoMdEye className="text-4xl" />
              ) : (
                <IoMdEyeOff className="text-4xl" />
              )}
            </button>
          )}

          {error !== "" && (
            <p className="text-sm text-red-600 dark:text-red-500">{error}</p>
          )}
        </div>
      </div>
    </>
  );
};
export default TextInput;
