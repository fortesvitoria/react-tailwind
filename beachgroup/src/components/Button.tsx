//typescript:
type ButtonProps = {
    title: string;
    bgColor?: string; 
    hoverColor?: string;
    textColor?: string;
};

const Button = ({ title, bgColor = "bg-[#DB6019]", hoverColor = "hover:bg-[#B94F16]", textColor = "text-white"}: ButtonProps) => {
    return (
        <div className='p-4'>
            <button className={`${bgColor} ${hoverColor} ${textColor} text-lg py-1.5 px-3 rounded-full font-bold w-37.5 text-sm cursor-pointer transition-colors duration-300`}>
                {title}
            </button>
        </div>
    )
}


export default Button