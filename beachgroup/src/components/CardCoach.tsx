import Button from './Button.tsx'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; // Ícones sugeridos para o menu

//typescript:
type CardCoachProps = {
  imagem: string;
  nome: string;
  funcao: string;
  descricao: string;
};

const CardCoach = ({ imagem, nome, funcao, descricao }: CardCoachProps) => {
  return (
    <Disclosure as="cardCoach" className="p-2">
      {({ open }) => (
        <>
          {/* Container Principal: Grid para Desktop / Flex para Mobile */}
          <div className="px-2 py-1 grid grid-cols-2 items-center bg-white/20 rounded-full">

            <div className="mb-2 mx-2 border border-black/30 p-4 rounded-4xl  w-80 flex items-center justify-between">
              <div className='flex justify-center pb-2'>
                <img src={imagem} className='max-h-20 rounded-t-full rounded-l-full' alt="Beach tennis training" />
              </div>
              <div className='flex flex-col'>
                <p className='uppercase font-bold pb-2'>{nome}</p>
                <p className='pb-2 text-sm'>{funcao}</p>
              </div>
              <div>
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-full hover:bg-white/20 focus:outline-none">
                  {open ? (
                    <ChevronUpIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <ChevronDownIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="pb-6 px-6 bg-white/20 rounded-4xl">

            <div className="pt-2 text-black/80">
              <p>{descricao}</p>
              <div className='flex justify-end'>
                <Button title="Agendar"/>
              </div>
            </div>

          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export default CardCoach