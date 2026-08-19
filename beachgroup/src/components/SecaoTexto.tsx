import imagem from '../assets/foto4.jpg';

const SecaoTexto = () => {
    return (
        <div className="bg-lime-400 rounded-4xl p-4 mt-6 mx-6 grid md:grid-cols-2 items-center">
            <div className="p-4">
                <h2 className='uppercase text-xl text-justify md:text-3xl font-bold italic'>Nós oferecemos treinamento de beach tennis excepcional e um ambiente acolhedor para jogadores de todas
                    as idades e níveis de habilidade.</h2>
                <p className='pt-4 text-justify text-sm md:text-lg'>Seja você um iniciante ou um jogador experiente, nossos programas são adaptados  para ajudá-lo a desenvolver suas habilidades, aprimorar sua técnica e alcançar seus objetivos no beach tennis.</p>
            </div>
            <div className='flex justify-center'>
                <img src={imagem} className='md:max-h-100 rounded-4xl' alt="Beach tennis training" />
            </div>
        </div>

    )
}

export default SecaoTexto