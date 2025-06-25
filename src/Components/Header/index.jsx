import { useState } from "react";
import logo from "/TPTLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import LPDesktop from "/LP_desktop.webp";

export default function Header() {
    const [opened, setOpened] = useState(true);

    const handleTouch = () => {
        setOpened(!opened);
    };

    const handleScroll = (children) => {
        switch (children) {
            case "Funcionalidades":
                if (screen.width > 600) {
                    window.scroll({ top: 600, behavior: "smooth" });
                } else {
                    window.scroll({ top: 710, behavior: "smooth" });
                }
                setOpened(!opened);
                break;

            case "I.A":
                if (screen.width > 600) {
                    window.scroll({ top: 3600, behavior: "smooth" });
                } else {
                    window.scroll({ top: 9000, behavior: "smooth" });
                }
                setOpened(!opened);
                break;
            case "App Personalizado":
                if (screen.width > 600) {
                    window.scroll({ top: 5200, behavior: "smooth" });
                } else {
                    window.scroll({ top: 10800, behavior: "smooth" });
                }
                setOpened(!opened);
                break;
            case "Planos":
                if (screen.width > 600) {
                    window.scroll({ top: 6000, behavior: "smooth" });
                } else {
                    window.scroll({ top: 11700, behavior: "smooth" });
                }
                setOpened(!opened);
                break;
            default:
                console.log("helo");
        }
    };

    return (
        <header className="flex flex-col gap-10 w-full text-white bg-gradient-to-r from-footer from-0% via-destrutive via-50% to-footer to-95% h-fit ">
            <section className="flex pt-5 pl-10 justify-between items-center">
                <img className=" md:w-50 w-30 " src={logo} alt="Logo TPT" />
                <div className="md:flex hidden gap-20 mx-20 text-xl font-bold ">
                    <button
                        onClick={() => {
                            handleScroll("Funcionalidades");
                        }}
                        className="font-poppins cursor-pointer"
                    >
                        Funcionalidades
                    </button>
                    <button
                        onClick={() => {
                            handleScroll("I.A");
                        }}
                        className="font-poppins cursor-pointer"
                    >
                        I.A.
                    </button>
                    <button
                        onClick={() => {
                            handleScroll("App Personalizado");
                        }}
                        className="font-poppins cursor-pointer"
                    >
                        App Personalizado
                    </button>
                    <button
                        onClick={() => {
                            handleScroll("Planos");
                        }}
                        className="font-poppins cursor-pointer"
                    >
                        Planos
                    </button>
                </div>

                <div className="relative inline-block md:hidden text-left w-100">
                    <div className="mx-10">
                        <button
                            onClick={() => {
                                handleTouch();
                            }}
                            type="button"
                            className="flex text-white items-center place-self-end w-20 h-20 justify-center gap-x-1.5 rounded-md bg-none px-3 py-2 text-sm font-semibold"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                        >
                            <GiHamburgerMenu size={40} />
                        </button>
                    </div>

                    <div
                        className={`${
                            opened ? "hidden" : ""
                        } mx-10 absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                    >
                        <div
                            className="py-1 text-black flex flex-col  border-2"
                            role="none"
                        >
                            <button
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                                onClick={() => {
                                    handleScroll("Funcionalidades");
                                }}
                                className="px-10 py-5 text-lg place-self-start border-b-1 border-black w-full font-poppins cursor-pointer "
                            >
                                Funcionalidades
                            </button>
                            <button
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                                onClick={() => {
                                    handleScroll("I.A");
                                }}
                                className="px-10 py-5 text-lg place-self-start border-b-1 border-black w-full font-poppins cursor-pointer "
                            >
                                I.A.
                            </button>
                            <button
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                                onClick={() => {
                                    handleScroll("App Personalizado");
                                }}
                                className="px-10 py-5 text-md text-start place-self-start border-b-1 border-black w-full font-poppins cursor-pointer "
                            >
                                App Personalizado
                            </button>
                            <button
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                                onClick={() => {
                                    handleScroll("Planos");
                                }}
                                className="px-10 py-5 text-lg place-self-start w-full font-poppins cursor-pointer "
                            >
                                Planos
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:w-6/10 mx-10 md:mx-0 place-self-center py-10 flex flex-col md:flex-row md:text-left text-center">
                <div className="flex flex-col gap-2">
                    <p className="md:text-lg text-lg font-semibold">
                        O App do Personal Trainer Avançado.
                    </p>
                    <h1 className="md:text-5xl/15 text-2xl font-bold font-poppins">
                        Personal, Otimize Seu Trabalho com o Digital.
                    </h1>
                    <p className=" text-lg">
                        Para Personais que entregam serviços e resultados acima
                        da média e precisam de recursos a altura.
                    </p>
                    <button
                        onClick={() => {
                            handleScroll("Planos");
                        }}
                        className="py-3 px-5 border-1 cursor-pointer border-white rounded-sm w-fit md:text-lg text-2xl md:self-baseline self-center"
                    >
                        Assinar agora!
                    </button>
                </div>
                <div>
                    <img src={LPDesktop} alt="Desktop" />
                </div>
            </section>
        </header>
    );
}
