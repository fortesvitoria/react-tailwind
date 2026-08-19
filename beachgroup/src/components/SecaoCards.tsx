import Card from './Card'

import imagem0 from '../assets/foto3.jpg';
import imagem1 from '../assets/foto7.jpg';
import imagem2 from '../assets/foto6.jpg';
import imagem3 from '../assets/foto5.jpg';

const SecaoCards = () => {
    return (
        <div className='grid md:grid-cols-4 items-center justify-items-center'>
            <Card imagem={imagem0}
                titulo='Passe único'
                descricao='Alugue a quadra uma única vez'
                valor='60' tipo='dia' />

            <Card imagem={imagem3}
                titulo='Plano mensal'
                descricao='Assinando o plano mensal você tem direito à 3 reservas semanais'
                valor='200' />

            <Card imagem={imagem2}
                titulo='Plano anual'
                descricao='Assinando o plano anual você tem direito à 3 reservas semanais'
                valor='150' />

            <Card imagem={imagem1}
                titulo='Aulas particulares'
                descricao='Aulas particulares com direito à 2 aulas semanais com nossos instrutores'
                valor='350' />
        </div>

    )
}

export default SecaoCards