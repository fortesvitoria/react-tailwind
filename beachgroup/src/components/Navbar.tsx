import Button from './Button.tsx'
import Logomarca from './Logomarca.tsx'


const Navbar = () => {
    return (
        <nav className='bg-[#FFFFFF33] rounded-full text-white grid grid-cols-1 md:grid-cols-6 m-4 shadow-sm'>
            <Logomarca />
            <ul className='flex gap-4 items-center justify-end md:col-span-4 cursor-pointer'>
                <li>Sobre nós</li>
                <li>Planos</li>
                <li>Agenda</li>
                <li>Contato</li>
            </ul>
            <Button title='Entrar'/>
        </nav>
    )
}


export default Navbar