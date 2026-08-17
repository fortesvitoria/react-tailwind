import { useState } from "react";
import { LockKeyhole,LockKeyholeOpen , TvMinimalPlay } from 'lucide-react';

const Info = () => {
    // antes do return posso colocar codigo js

    const [soma, setSoma] = useState(5);
    const [show, setShow] = useState(false);

    // a função abaixo virou uma arrow func no btn
    // function mostra() {
    //     setSoma(soma + 3);
    // }

    console.log(soma)



    return (
        <div className="mt-2 flex w-full justify-between items-center">
            <div className="flex flex-col gap-2 text-[#00A2F7]">
                <p className="font-bold">Pratique com projetos reais</p>
                <p className="w-175 text-sm">Em vez de apenas ensinar teoria, focamos em código real para inspirar seu próximo projeto. Aprender não precisa ser chato.</p>
                <button className="w-37.5 h-8 bg-[#00A2F7] text-white rounded-md cursor-pointer" onClick={() => setSoma(soma + 3)}>Ver mais - {soma}</button>
            </div>
            <div className="flex flex-col text-[#00A2F7] bg-white border-md gap-1">
                <p className="font-bold text-sm">Cursos rápidos</p>
                <p className="text-xs">Cursos práticos de curta duração</p>
                <button className="w-37 border py-0.5 rounded-md cursor-pointer flex justify-center items-center gap-2 hover:bg-[#00A2F7] hover:text-white transition-colors text-sm font-bold" onClick={() => setShow(!show)}>
                    {show ? <LockKeyholeOpen size={12} /> : <LockKeyhole size={12} />}
                    {show ? 'Esconder' : 'Mostrar'}
                </button>
                {/* verifica se variavel show é true, se for, mostra o p abaixo */}
                {show && (
                    <p className="flex items-center gap-2 text-sm cursor-pointer"><TvMinimalPlay size={12} /> Clique aqui para assistir</p>
                )
                }




            </div>
        </div>
    )
}

export default Info