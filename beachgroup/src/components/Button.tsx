//typescript:
type ButtonProps = {
    title: string;
    bgColor?: string; 
    hoverColor?: string;
    textColor?: string;
};

const Button = ({ title, bgColor = "bg-lime-400", hoverColor = "hover:bg-lime-500", textColor = "text-primary"}: ButtonProps) => {
    return (
        <div className='p-2'>
            <button className={`${bgColor} ${hoverColor} ${textColor} text-lg py-1.5 px-3 rounded-full font-bold w-37.5 text-[12px] cursor-pointer transition-colors duration-300 uppercase`}>
                {title}
            </button>
        </div>
    )
}


export default Button