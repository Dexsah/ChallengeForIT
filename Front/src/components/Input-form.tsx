type TypeInput = "text" | "file";

interface Props {
  label: string;
  type: TypeInput;
  className?: string;
}

export const InputForm = ({ type, className, label }: Props) => {
  return (
    <div className={`w-[40%] flex flex-col focus:outline-none ${className}`}>
      <label className="bold"> {label} </label>
      <input className="pl-2 py-2 border border-black rounded-lg " type={type} />
    </div>
  );
};
