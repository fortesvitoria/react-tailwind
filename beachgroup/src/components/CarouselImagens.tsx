import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; // Ícones sugeridos para o menu
import React from 'react';


//typescript:
type CarouselImagensProps = {
    slides: Array<string>;
};

const CarouselImagens = ({ slides }: CarouselImagensProps) => {

    let [current, setCurrent] = React.useState(2);

    let previousSlide = () => {
        if (current === 0) {
            setCurrent(slides.length - 1);
        } else {
            setCurrent(current - 1);
        }
    };

    let nextSlide = () => {
        if (current === slides.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    };

    return (
        <div className=" relative">
            <div className={`flex transition ease-out duration-300`} style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide) => {
                    return <img src={slide} alt="Imagem do Carousel" className="rounded-4xl p-2" />
                })}
                
            </div>
            <div className=' top-0 h-full w-full justify-center flex items-center px-4'>
                <button onClick={previousSlide} className='p-2 m-2 rounded-full bg-lime-400 hover:bg-lime-500 cursor-pointer focus:outline-none'>
                    <ChevronLeftIcon className="block h-6 w-6" aria-hidden="true" />
                </button>
                <button onClick={nextSlide} className='p-2 m-2 rounded-full bg-lime-400 hover:bg-lime-500 cursor-pointer focus:outline-none'>
                    <ChevronRightIcon className="block h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}

export default CarouselImagens