import React, { useState, useRef, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Contact from "../Contact";

export default function Footer() {
    const [carouselData, setCarouselData] = useState([
        {
            who: "Jonatas Manojo",
            description:
                "Show demais, cara. " +
                "Estava até comentando com outros personais. Eu tinha uma ideia de App que fosse igual ao de vocês, parece que vocês leram meus pensamentos e idealizaram tudo, mais e melhor! Kkk " +
                "Muito show mesmo. Desejo todo sucesso do mundo e agradeço pelos serviços.",
            img: "https://50d8ebadf94236f89544280f4e8097f5.cdn.bubble.io/f1748916485750x268012411584116700/Jonatas.png",
        },
        {
            who: "Fernando Oliveira",
            description:
                "Cara que aplicativo sensacional, super completo, com tudo que você precisa (e até mais) desde a anamnese e avaliação física até para para ministrar aula, planejar treinamento, ciclos periodização e tudo que um personal precisa. " +
                "Com certeza a assinatura desse app vale a pena, além de agregar muito valor na sua consultoria/ treinamento.",
            img: "https://50d8ebadf94236f89544280f4e8097f5.cdn.bubble.io/f1748916726100x124110406646804180/Oliveira.png",
        },
        {
            who: "Priscila Siqueira",
            description:
                "Utilizo já a 1 ano e estou amando, eles estão sempre atualizando e buscando melhoras do app, e mesmo que na plataforma nao tenha o exercício e muito facil de adicionar, além de qualquer problema o suporte se preocupa em trazer a solução",
            img: "https://50d8ebadf94236f89544280f4e8097f5.cdn.bubble.io/f1748916808556x987049491176073600/Priscila.png",
        },
        {
            who: "Brunnão Renan",
            description:
                "Vocês me ganharam pelo o suporte De vcs. Muito bom! Parabéns",
            img: "https://50d8ebadf94236f89544280f4e8097f5.cdn.bubble.io/f1748313534421x124654861088176800/Brunao.png",
        },
        {
            who: "Luiz Cláudio",
            description:
                "Me atende perfeitamente, muito completo sem perder a praticidade que o aluno precisa na hora de executar seu treinamento!",
            img: "https://50d8ebadf94236f89544280f4e8097f5.cdn.bubble.io/f1748916705180x523084560412280700/Luiz%20Claudio.png",
        },
        {
            who: "Matheus Azevedo",
            description:
                "Cara, o app TPT facilitou demais minha vida! Organizo os treinos, falo com os alunos e controlo tudo num lugar só. Hoje não me vejo trabalhando sem ele.",
            img: "https://50d8ebadf94236f89544280f4e8097f5.cdn.bubble.io/f1748917470302x793793626914877700/Matheus%20Azevedo.png",
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState("");
    const isAnimating = useRef(false);

    useEffect(() => {
        if (animationClass) {
            isAnimating.current = true;
            const timer = setTimeout(() => {
                setAnimationClass("");
                isAnimating.current = false;
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [animationClass]);

    const previusObj = () => {
        if (!isAnimating.current) {
            setAnimationClass("slide-out-right");

            setTimeout(() => {
                setCurrentIndex((prevIndex) => {
                    if (prevIndex === 0) {
                        return carouselData.length - 1;
                    }
                    return prevIndex - 1;
                });
                setAnimationClass("slide-in-left");
            }, 10);
        }
    };

    const nextObj = () => {
        if (!isAnimating.current) {
            setAnimationClass("slide-out-left");

            setTimeout(() => {
                setCurrentIndex((prevIndex) => {
                    if (prevIndex === carouselData.length - 1) {
                        return 0;
                    }
                    return prevIndex + 1;
                });
                setAnimationClass("slide-in-right");
            }, 10);
        }
    };

    const currentItem = carouselData[currentIndex];

    return (
        <>
            <section className=" text-center text-white bg-gradient-to-b from-footer via-footer to-redTpt py-10">
                <h1 className="md:text-5xl text-xl font-extrabold pt-6">
                    O que nossos clientes dizem sobre nós
                </h1>
                <h2 className="text-xl pt-4 mb-8">
                    Depoimentos de usuários <b>REAIS</b>
                </h2>
                <main className="flex items-center justify-center space-x-4 px-4 w-full pb-18">
                    <button
                        className="text-red-500 text-5xl cursor-pointer hover:text-red-400 transition-colors duration-200"
                        onClick={previusObj}
                        aria-label="Slide anterior"
                    >
                        <FaChevronLeft />
                    </button>

                    <div
                        key={currentIndex}
                        className={`duration-700 ease-in-out w-full md:h-100 h-fit md:max-w-2xl bg-footer/60 rounded-lg shadow-lg flex flex-col p-8 my-8 md:mx-20 justify-between ${animationClass}`}
                    >
                        <p className="md:text-lg italic mb-6">
                            "{currentItem.description}"
                        </p>
                        <div className="flex items-center space-x-4">
                            <img
                                src={currentItem.img}
                                alt={currentItem.who}
                                className="rounded-full size-20 object-cover border-2 border-white"
                            />
                            <p className="text-xl font-semibold">
                                {currentItem.who}
                            </p>
                        </div>
                    </div>

                    <button
                        className="text-red-500 text-5xl cursor-pointer hover:text-red-400 transition-colors duration-200"
                        onClick={nextObj}
                        aria-label="Próximo slide"
                    >
                        <FaChevronRight />
                    </button>
                </main>
                <Contact />
            </section>
        </>
    );
}
