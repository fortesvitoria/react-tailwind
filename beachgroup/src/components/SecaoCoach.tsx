import CardCoach from './CardCoach'

import imagem0 from '../assets/coach1.jpg';
import imagem1 from '../assets/coach2.jpg';
import imagem2 from '../assets/coach3.jpg';
import imagem3 from '../assets/coach4.jpg';

const SecaoCoach = () => {
    return (
        <div>
            <h2 className='uppercase text-2xl font-bold italic mt-6 mb-4 pl-8 pr-15 text-lime-300 bg-sky-500 inline-block [clip-path:polygon(0%_0%,100%_0%,90%_100%,0%_100%)]'>Nosso time</h2>
            <div className='grid md:grid-cols-4 items-stretch justify-items-center h-full'>
            <CardCoach imagem={imagem0}
                nome='Paulo Jorge'
                descricao='Instrutor infantil'
             />

            <CardCoach imagem={imagem3}
                nome='Marina Antonia'
                descricao='Instrutora'
             />

            <CardCoach imagem={imagem2}
                nome='Marcos Rangel'
                descricao='Instrutor'
            />

            <CardCoach imagem={imagem1}
                nome='Ana Regina'
                descricao='Instrutora'
            />
        </div>
        </div>

    )
}

export default SecaoCoach