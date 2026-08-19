import Logo from '../assets/Logo.png'

const Logomarca = () => {
    return (
            <div className='flex gap-2 items-center p-4 '>
                <img className='h-6' src={Logo} alt="Logo BeachGroup" />
                <p className='text-white font-bold tracking-wide'>BeachGroup</p>
                </div>
    )
}


export default Logomarca