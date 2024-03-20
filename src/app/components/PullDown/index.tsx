import React from "react";

type PullDownType = JSX.IntrinsicElements["select"] & {
    id?: string;
    label?: string;
    error?: string;
  };

  type Options = {
    value: string;
    label: string;
  };
  
  type OptionsProps = {
    options: Options[];
  };
  
  type Props = PullDownType & OptionsProps;

export const PullDown = React.forwardRef<HTMLSelectElement, Props>(
  (
    {
      className,
      id,
      label,
      error,
      options,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <>
        {label && (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        )}
        <select
          id={id}
          className={
            className
          }
          ref={forwardedRef}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* エラーのCSSクラス名は環境によって変更する */}
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </>
    );
  }
);

PullDown.displayName = "PullDown";
