import { forwardRef } from "react";
import { InputProps } from "../interfaces/component.interface";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, ...props }, ref) => {
    return <input ref={ref} value={value} onChange={onChange} {...props} />;
  }
);

export default Input;
