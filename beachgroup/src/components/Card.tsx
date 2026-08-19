import Button from './Button'

//typescript:
type CardProps = {
    imagem: string;
    titulo: string;
    descricao: string;
    valor: string;
    tipo?: string;
};

const Card = ({ imagem, titulo, descricao, valor, tipo = "mes" }: CardProps) => {
    return (
        <div className="mb-6 mx-6 border border-black/30 p-4 rounded-4xl md:mb-0.5 md:w-80 flex flex-col justify-between">
            <div className='flex justify-center pb-2'>
                <img src={imagem} className='md:max-h-50 rounded-4xl' alt="Beach tennis training" />
            </div>
            <div className='flex flex-col'>
                <p className='uppercase font-bold pb-2'>{titulo}</p>
                <p className='pb-2 text-sm'>{descricao}</p>
            </div>
            <div className='flex justify-between items-baseline'>
                <p className='font-bold text-xs'>R${valor}<span className='text-sm'>/{tipo}</span></p>
                <Button title="Contratar" />
            </div>
        </div>
    )
}

export default Card