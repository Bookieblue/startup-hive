import Image from 'next/image';


type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  isLoading: boolean;
  options?: object;
  onClick : () => void;
};
const Button = ({
  type,
  title,
  icon,
  variant,
  full,
  isLoading = false,
  options,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-md border ${variant} ${
        full && 'w-full'
      }`}
      type={type}
      {...options}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}

      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {isLoading ? 'Loading...' : title}
      </label>
     
    </button>
  );
};

export default Button;
