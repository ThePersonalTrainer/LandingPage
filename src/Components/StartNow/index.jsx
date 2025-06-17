export default function StartNow() {
    return (
        <div className="bg-gray-100 rounded-lg h-fit flex flex-col text-center py-5 px-10 gap-2">
            <h2 className="text-2xl text-gray-700 font-montSerrat font-semibold">
                Plano Start
            </h2>
            <p className="font-montSerrat text-gray-400 text-lg">
                Para quem está iniciando no Online
            </p>
            <h3 className="text-gray-500 font-poppins text-lg  ">
                Por tempo limitado!
            </h3>
            <h4 className="text-redTpt font-poppins">
                R$
                <strong className="text-5xl font-semibold">18,90</strong>
                /mês
            </h4>
            <ol className="flex flex-col gap-3 pt-10">
                <li className="flex justify-between text-gray-400">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        Até 5 Alunos
                    </p>
                    <IoCloseCircleSharp size={30} />
                </li>
                <li className="flex justify-between text-red-300">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        Prescrição com IA
                    </p>
                    <IoCheckmarkCircle size={30} />
                </li>
                <li className="flex justify-between text-red-300">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        Av. Física Completa
                    </p>
                    <IoCheckmarkCircle size={30} />
                </li>
                <li className="flex justify-between text-red-300">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        Secretária Virtual (agenda)
                    </p>
                    <IoCheckmarkCircle size={30} />
                </li>
                <li className="flex justify-between text-red-300">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        Painel Financeiro Completo
                    </p>
                    <IoCheckmarkCircle size={30} />
                </li>
                <li className="flex justify-between text-red-300">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        Modelos de Treinamentos
                    </p>
                    <IoCheckmarkCircle size={30} />
                </li>
                <li className="flex justify-between text-red-300">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        Organizador de Documentos
                    </p>
                    <IoCheckmarkCircle size={30} />
                </li>
                <li className="flex justify-between text-red-300">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        Gerenciador de Tarefas
                    </p>
                    <IoCheckmarkCircle size={30} />
                </li>
                <li className="flex justify-between text-red-300">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        Chat
                    </p>
                    <IoCheckmarkCircle size={30} />
                </li>
                <li className="flex justify-between text-red-300">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        Recados/Avisos
                    </p>
                    <IoCheckmarkCircle size={30} />
                </li>
                <li className="flex justify-between text-gray-400">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        App com meu logo
                    </p>
                    <IoCloseCircleSharp size={30} />
                </li>
                <li className="flex justify-between text-gray-400">
                    <p className="text-gray-800 font-semibold text-sm font-montSerrat">
                        App com minhas cores
                    </p>
                    <IoCloseCircleSharp size={30} />
                </li>
            </ol>
            <a
                href=""
                className="bg-gradient-to-r from-footer via-redTpt to-footer text-white text-lg text-bold
                                        rounded-lg py-3 w-2/3 place-self-center"
            >
                Assinar!
            </a>
        </div>
    );
}
