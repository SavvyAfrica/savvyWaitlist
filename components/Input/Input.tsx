

type InputProps = {
  name: string;
  className: string;
  placeholder?: string;
  type: string;
  id: string;
  value: string;
  onChange: (event: any) => void;
};


export const Input = ({ name,id,className,placeholder,type,value,onChange }: InputProps) => {
  
  return (
    <input name={name} id={id} onChange={onChange} value={value} placeholder={placeholder} type={type}
      className={`block text-black flex-auto w-full p-2 rounded bg-white 
        border outline-[#DFDFE6] outline-0 placeholder:text-sm text-sm ${className}`}
    />
  );
};