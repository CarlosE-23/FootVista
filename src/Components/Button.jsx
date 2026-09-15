import { ArrowRight } from "lucide-react";

const Button = ({
    label,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none transition-all duration-200
      ${
          backgroundColor
              ? `${backgroundColor} ${textColor} ${borderColor} hover:opacity-80`
              : "bg-coral-red text-white border-coral-red hover:bg-gs-black hover:border-gs-black"
      } rounded-full ${fullWidth && "w-full"}`}
        >
            {label}
            <ArrowRight size={20} className="ml-1" />
        </button>
    );
};

export default Button;
