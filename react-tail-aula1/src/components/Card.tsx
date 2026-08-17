//typescript:
type CardProps = {
    title: string;
    carga?: string; //ponto de interrogação indica que a propriedade é opcional
    img?: string;
};


const Card = ({title, carga, img}: CardProps) => {
    return (
        <div className='border rounded-md p-4 w-full border-[#00a2f7] flex flex-col'>
            <div className="flex-1 justify-center items-center flex">
                <img src={img} alt={title} className="w-32 mx-auto" />
            </div>
            <p className="text-[#00a2f7] font-bold text-sm">{title}</p>
            <p className="text-[#00a2f7] text-sm m-1">{carga}</p>
            <button className="bg-[#00a2f7] text-white py-1 px-2 rounded-md hover:bg-[#0088cc] font-bold w-full text-sm cursor-pointer">Inscrever-se</button>
        </div>
    )
}

export default Card