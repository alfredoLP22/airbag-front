import { FieldValues } from "react-hook-form";
import { SelectProps } from "../interfaces/component.interface";

function Select<T extends FieldValues>({
  options,
  value,
  onChange,
  className,
}: SelectProps<T>) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={className}
    >
      <option value="" disabled>
        -- Select an option --
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
