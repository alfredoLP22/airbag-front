const Label = ({
  htmlFor,
  className = "p-1",
  isRequired = false,
  text,
}: {
  htmlFor: string;
  className?: string;
  isRequired?: boolean;
  text: string;
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {text} {isRequired && <span className="text-roman-500 text-lg">*</span>}
    </label>
  );
};

export default Label;
