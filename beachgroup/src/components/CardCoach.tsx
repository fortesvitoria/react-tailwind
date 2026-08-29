//typescript:
type CardCoachProps = {
    imagem: string;
    nome: string;
    descricao: string;
};

const CardCoach = ({ imagem, nome, descricao}: CardCoachProps) => {
    return (
        <div className="mb-2 mx-6 p-4 rounded-4xl flex flex-col justify-between">
            <div className='flex justify-center pb-2'>
                <img src={imagem} className='max-h-50 rounded-l-full rounded-t-full' alt="Beach tennis coach profile picture" />
            </div>
            <div className='flex flex-col items-center'>
                <p className='uppercase font-bold pb-2 text-xs'>{nome}</p>
                <p className='pb-2 text-xs'>{descricao}</p>
            </div>
        </div>
    )
}

export default CardCoach