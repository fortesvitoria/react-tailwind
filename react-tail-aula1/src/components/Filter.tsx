import { Search } from 'lucide-react';

//typescript:
type FilterProps = {
    title: string;
    paragraph?: string; //ponto de interrogação indica que a propriedade é opcional
    placeholder: string;
};

const Filter = ({ title, paragraph, placeholder }: FilterProps) => {
    return (
        <div className='flex flex-col items-center'>
            <p className='text-center font-bold text-[#00a2f7] text-xl mt-10'>
                {title}
            </p>
            <p className='text-sm text-[#00a2f7]'>
                {paragraph}
            </p>
            <div className="flex items-center mt-2">
                <input placeholder={placeholder} type="text" className='bg-white border border-[#F2F2F2] rounded-l-md w-153.75 h-8.75 text-xs px-2' />
                <div className='h-8.75 w-8.75 flex justify-center items-center bg-[#e1f4ff] rounded-r-md cursor-pointer'>
                    <Search size={16} className='text-[#00a2f7]'/>
                </div>
            </div>
        </div>
    )
}

export default Filter