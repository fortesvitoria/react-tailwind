//typescript:
type ButtonProps = {
    title: string;
};


const Button = ({title}: ButtonProps) => {
    return (
        <div className='p-4'>
            <button className="bg-[#DB6019] text-white py-1 px-2 rounded-full hover:bg-[#B94F16] font-bold w-full text-sm cursor-pointer">{title}</button>
        </div>
    )
}


export default Button