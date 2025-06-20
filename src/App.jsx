import { useState } from "react";
import "./App.css";
import CardComponent from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import monitor from "/monitor.png";
import PCTPT from "/PC-TPT.png";
import CardInfo from "./Components/CardInfo";
import TPTeto from "/TPTeto.png";
import TPTetoJoia from "/TPTetoJoia.png";
import laptop from "/floatNotebook.png";
import handCel from "/handPhone.png";

import Cards from "./InfoLists/Cards";
import infos from "./InfoLists/icons";
import CardsLast from "./InfoLists/CardsLast";
import CardLastComponent from "./Components/CardLast";
import MiddleSection from "./Components/Middle";

import { IoCloseCircleSharp, IoCheckmarkCircle } from "react-icons/io5";

function App() {
    const [current, setCurrent] = useState([]);
    const [TPTMan, setTPTMan] = useState(TPTeto);


    window.addEventListener("scroll", () => {
        if (window.scrollY > 850) {
            document.querySelector(".slider1").classList.add("fromLeft");
        }
        if (window.scrollY > 1500) {
            document.querySelector(".slider2").classList.add("fromRight");
        }
    });

    const handleOver = (target) => {
        if (target._reactName === "onMouseOver") {
            setTPTMan(TPTetoJoia);
        } else {
            setTPTMan(TPTeto);
        }
    };

    const handleClick = (id) => {
        setCurrent((prevCurrent) => {
            if (prevCurrent.includes(id)) {
                return prevCurrent.filter((item) => item !== id);
            } else {
                return [...prevCurrent, id];
            }
        });
    };

    return (
        <section className="font-sans tudo">
            <Header />

            <main className="w-full">
                {/* Seção de Funcionalidades */}
                <section className="flex flex-col gap-10 h-fit bg-gray-100 py-10 md:py-20 px-4 md:px-8 lg:px-16">
                    <div className="flex flex-col place-self-center text-center gap-5 md:gap-10 max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-red-600">
                            Funcionalidades
                        </h1>
                        <h3 className="text-xl md:text-2xl">
                            <strong>TUDO</strong>, absolutamente{" "}
                            <strong>TUDO</strong> que você precisa para escalar
                            no <strong>PRESENCIAL</strong> e{" "}
                            <strong>ONLINE</strong>
                        </h3>
                    </div>
                    <ol className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-8 justify-items-center  mx-auto">
                        {Cards.map((card) => (
                            <CardComponent
                                current={current.includes(card.id)}
                                key={card.id}
                                id={card.id}
                                image={card.image}
                                titulo={card.titulo}
                                texto={card.texto}
                                descricao={card.descricao}
                                click={handleClick}
                            />
                        ))}
                    </ol>
                </section>

                {/* Seção de Prescrição de Treinamento e Avaliação Física */}
                <section
                    className={`fundo h-fit py-10 md:py-20 flex flex-col w-full gap-10 md:gap-20 px-4 md:px-8 lg:px-16`}
                >
                    <div className="imagem"></div>{" "}
                    {/* Certifique-se de que a classe 'imagem' no seu CSS tem estilos responsivos, se for para uma imagem de fundo */}
                    <div className="flex flex-col gap-10 slider1">
                        <div className="flex flex-col text-center gap-3 md:gap-5 md:max-w-4xl w-full mx-auto">
                            <h1 className="font-poppins text-2xl sm:text-3xl md:text-5xl font-bold text-red-500">
                                Prescrição de Treinamento
                            </h1>
                            <h3 className="font-barlow text-base md:text-xl px-2 text-center">
                                Para quem precisa de muito mais que o básico.
                                Tudo foi pensado para profissionais que buscam
                                se destacar no mercado
                            </h3>
                        </div>

                        <div className="flex flex-col md:flex-row place-content-center items-center gap-5 md:gap-10 max-w-6xl mx-auto">
                            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 w-full md:w-3/5">
                                {infos.map((cardInfo) => (
                                    <CardInfo
                                        key={cardInfo.titulo}
                                        icon={cardInfo.icon}
                                        titulo={cardInfo.titulo}
                                        descricao={cardInfo.descricao}
                                    />
                                ))}
                            </ol>
                            <div className="w-full md:w-2/5 place-self-center mt-8 md:mt-0">
                                <img
                                    className="w-full h-auto"
                                    src={PCTPT}
                                    alt="PC com o app aberto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10  slider2">
                        <div className="flex flex-col place-self-center text-center max-w-4xl mx-auto">
                            <h1 className="font-poppins text-3xl md:text-5xl font-bold text-red-500">
                                Avaliação Física Completa
                            </h1>
                            <p className="text-base md:text-lg text-center text-gray-700 px-2">
                                São mais de <strong>40 Protocolos</strong>{" "}
                                distribuídos em:
                            </p>
                        </div>
                        <ol className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-14 justify-items-center max-w-6xl mx-auto">
                            {CardsLast.map((card) => (
                                <CardLastComponent
                                    key={card.title}
                                    image={card.image}
                                    title={card.title}
                                    text={card.text}
                                />
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Seção de Criação de Treinamentos com IA */}
                <section className="h-fit bg-gradient-to-t from-0% from-footer via-redTpt via-50% to-99% to-footer flex flex-col items-center ">
                    <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 place-self-center font-poppins text-center">
                        <div className="text-white pt-10 flex flex-col gap-5">
                            <h1 className="text-3xl md:text-5xl font-bold font-poppins">
                                Crie Treinamentos com I.A.
                            </h1>
                            <p className="text-base md:text-lg leading-relaxed">
                                Com{" "}
                                <strong className="text-xl md:text-2xl">
                                    apenas alguns cliques
                                </strong>{" "}
                                nossa Inteligência Artificial{" "}
                                <strong className="text-xl md:text-2xl">
                                    cria treinamentos personalizados{" "}
                                </strong>
                                utilizando os critérios que você determinar e os
                                dados da Anamnese de cada aluno.
                            </p>
                        </div>
                        <img
                            src={monitor}
                            alt="Monitor com a interface do aplicativo"
                            className="mt-10 w-full h-auto max-w-2xl mx-auto"
                        />
                    </div>
                    <div className="joiaPalco bg-black text-center py-5 font-poppins mt-10 w-full">
                        <h3 className="text-white text-base md:text-xl w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
                            Se você ainda não usa Inteligência artificial para
                            otimizar seu trabalho, está perdendo tempo e
                            dinheiro
                        </h3>

                        <img
                            hidden={screen.width < 1100 ? true : false}
                            onMouseOver={handleOver}
                            onMouseOut={handleOver}
                            className="joiaMan mx-auto"
                            src={TPTMan}
                            alt="TPT Man"
                        />
                    </div>
                </section>

                {/* Seção de Serviços Inclusos */}
                <section className="flex flex-col gap-10 bg-gray-100 h-fit py-10 md:py-20 px-4 md:px-8 lg:px-16">
                    <h1 className="w-full md:w-6/10 place-self-center text-start font-poppins text-3xl md:text-5xl text-red-500 font-bold">
                        Serviços inclusos
                    </h1>
                    <div className="w-full md:w-5/10 lg:w-4/10 xl:w-3/5 place-self-center flex flex-col md:flex-row gap-5">
                        <div className="bg-white rounded-lg w-full md:w-1/2 shadow-md shadow-gray-200">
                            <img
                                className="rounded-t-lg w-full h-auto"
                                src={handCel}
                                alt="Celular na mão"
                            />
                            <div className="p-5 flex flex-col gap-3 md:gap-5">
                                <h1 className="text-gray-600 text-lg md:text-xl font-semibold font-montSerrat">
                                    App do Aluno 100% Grátis
                                </h1>
                                <p className="font-montSerrat text-sm md:text-base">
                                    Os alunos possuem seu próprio app. Basta
                                    cadastrá-los ou enviar um link para cadastro
                                    e pronto, recebem os dados de acesso e links
                                    para download nas lojas de aplicativos. Tudo
                                    muito simples e rápido.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg w-full md:w-1/2 shadow-md shadow-gray-200">
                            <img
                                className="rounded-t-lg w-full h-auto"
                                src={laptop}
                                alt="Laptop"
                            />
                            <div className="p-5 flex flex-col gap-3 md:gap-5">
                                <h1 className="text-gray-600 text-lg md:text-xl font-semibold font-montSerrat">
                                    Relatórios de Performance
                                </h1>
                                <p className="font-montSerrat text-sm md:text-base">
                                    Acompanhe o progresso dos resultados de seus
                                    alunos com dados de evolução de cada
                                    exercício e cada sessão de treino,
                                    separadamente. Tudo com cálculos e gráficos
                                    interativos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <MiddleSection />

                {/* Seção de Planos */}
                <section className="py-10 md:py-20 px-4 md:px-8 lg:px-16">
                    <div className="w-full md:w-6/10 place-self-center py-5 md:py-10 flex flex-col gap-5 md:gap-10 mx-auto">
                        <h1 className="text-2xl md:text-3xl font-semibold font-poppins text-center text-gray-600">
                            Escolha seu plano
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                            {/* Plano Start */}
                            <div className="bg-gray-100 rounded-lg h-fit flex flex-col text-center py-5 px-5 md:px-10 gap-2 shadow-md">
                                <h2 className="text-xl md:text-2xl text-gray-700 font-montSerrat font-semibold">
                                    Plano Start
                                </h2>
                                <p className="font-montSerrat text-gray-400 text-sm md:text-lg">
                                    Para quem está iniciando no Online
                                </p>
                                <h3 className="text-gray-500 font-poppins text-base md:text-lg">
                                    Por tempo limitado!
                                </h3>
                                <h4 className="text-redTpt font-poppins">
                                    R$
                                    <strong className="text-4xl md:text-5xl font-semibold">
                                        18,90
                                    </strong>
                                    /mês
                                </h4>
                                <ol className="flex flex-col gap-2 pt-5">
                                    <li className="flex justify-between items-center text-gray-400">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Até 5 Alunos
                                        </p>
                                        <IoCloseCircleSharp size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Prescrição com IA
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Av. Física Completa
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Secretária Virtual (agenda)
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Painel Financeiro Completo
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Modelos de Treinamentos
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Organizador de Documentos
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Gerenciador de Tarefas
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Chat
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Recados/Avisos
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-gray-400">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            App com meu logo
                                        </p>
                                        <IoCloseCircleSharp size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-gray-400">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            App com minhas cores
                                        </p>
                                        <IoCloseCircleSharp size={24} />
                                    </li>
                                </ol>
                                <a
                                    href="https://app.personaltpt.com.br/checkout?plano=Start"
                                    className="bg-gradient-to-r from-footer via-redTpt to-footer text-white text-base md:text-lg font-bold rounded-lg py-2 md:py-3 w-4/5 place-self-center mt-5"
                                >
                                    Assinar!
                                </a>
                            </div>

                            {/* Plano Expert */}
                            <div className="bg-gray-100 rounded-lg h-fit flex flex-col text-center py-5 px-5 md:px-10 gap-2 shadow-md">
                                <h2 className="text-xl md:text-2xl text-gray-700 font-montSerrat font-semibold">
                                    Plano Expert
                                </h2>
                                <p className="font-montSerrat text-gray-400 text-sm md:text-lg">
                                    Perfeito para quem busca custo/benefício
                                </p>
                                <h3 className="text-gray-500 font-poppins text-base md:text-lg">
                                    R${" "}
                                    <strong className="text-xl md:text-2xl line-through font-semibold">
                                        69,90
                                    </strong>
                                </h3>
                                <h4 className="text-redTpt font-poppins">
                                    R$
                                    <strong className="text-4xl md:text-5xl font-semibold">
                                        34,90
                                    </strong>
                                    /mês
                                </h4>
                                <ol className="flex flex-col gap-2 pt-5">
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Alunos ilimitados
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Prescrição com IA
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Av. Física Completa
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Secretária Virtual (agenda)
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Painel Financeiro Completo
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Modelos de Treinamentos
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Organizador de Documentos
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Gerenciador de Tarefas
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Chat
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Recados/Avisos
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-gray-400">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            App com meu logo
                                        </p>
                                        <IoCloseCircleSharp size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-gray-400">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            App com minhas cores
                                        </p>
                                        <IoCloseCircleSharp size={24} />
                                    </li>
                                </ol>
                                <a
                                    href="https://app.personaltpt.com.br/checkout?plano=Expert"
                                    className="bg-gradient-to-r from-footer via-redTpt to-footer text-white text-base md:text-lg font-bold rounded-lg py-2 md:py-3 w-4/5 place-self-center mt-5"
                                >
                                    Assinar!
                                </a>
                            </div>

                            {/* Plano Custom */}
                            <div className="bg-gray-100 rounded-lg h-fit flex flex-col text-center py-5 px-5 md:px-10 gap-2 shadow-md">
                                <h2 className="text-xl md:text-2xl text-gray-700 font-montSerrat font-semibold">
                                    Plano Custom
                                </h2>
                                <p className="font-montSerrat text-gray-400 text-sm md:text-lg">
                                    Tenha seu próprio App 100% Personalizado
                                </p>
                                <h3 className="text-gray-500 font-poppins text-base md:text-lg">
                                    Por tempo limitado!
                                </h3>
                                <h4 className="text-redTpt font-poppins">
                                    R$
                                    <strong className="text-4xl md:text-5xl font-semibold">
                                        150,00
                                    </strong>
                                    /mês
                                </h4>
                                <ol className="flex flex-col gap-2 pt-5">
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Alunos ilimitados
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Prescrição com IA
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Av. Física Completa
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Secretária Virtual (agenda)
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Painel Financeiro Completo
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Modelos de Treinamentos
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Organizador de Documentos
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Gerenciador de Tarefas
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Chat
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            Recados/Avisos
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            App com meu logo
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                    <li className="flex justify-between items-center text-red-300">
                                        <p className="text-gray-800 font-semibold text-xs md:text-sm font-montSerrat">
                                            App com minhas cores
                                        </p>
                                        <IoCheckmarkCircle size={24} />
                                    </li>
                                </ol>
                                <a
                                    href="https://app.personaltpt.com.br/checkout?plano=Custom"
                                    className="bg-gradient-to-r from-footer via-redTpt to-footer text-white text-base md:text-lg font-bold rounded-lg py-2 md:py-3 w-4/5 place-self-center mt-5"
                                >
                                    Assinar!
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="flex flex-col md:flex-row items-center justify-center gap-6 p-4 py-10 md:py-20 px-4 md:px-8 lg:px-16 place-self-center w-4/5 md:w-6/10">
                    <img src={selo} alt="selo garantia 7 dias" class="w-28 h-28 md:w-32 md:h-32 object-contain" />
                    <div class="flex flex-col text-center md:text-left">
                        <h1 class="text-2xl md:text-3xl font-bold text-redTpt">Garantia de <b>7 Dias</b></h1>
                        <h2 class="mt-2 text-base md:text-lg text-gray-600 leading-relaxed font-semibold">O investimento é <b class="font-semibold">SEM RISCO</b>. Você tem 07 dias para testar todas as funcionalidades do Aplicativo e só então decidir se quer ficar. Se não gostar do aplicativo, basta enviar um e-mail e solicitar <b class="font-semibold">100% de reembolso</b>. O Risco é todo nosso!</h2>
                    </div>
                </section>
            </main>
            <Footer />
        </section>
    );
}

export default App;
