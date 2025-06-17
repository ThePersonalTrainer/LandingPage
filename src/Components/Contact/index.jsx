import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import img1 from "/disponivelAppStore.png";
import img2 from "/disponivel-google-play-badge.png";
import ytLogo from "/ytlogo.png";
import instaLogo from "/instagramIcon.webp";
import footerLogo from "/TPTLogo.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
    const [message, setMessage] = useState("");
    const [number, setNumber] = useState("");


    function telefone(v) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
        return v;
    }

    async function sendMessage(e) {
        e.preventDefault();
        try {
            await axios
                .post(
                    "https://aplicativotpt.bubbleapps.io/version-test/api/1.1/wf/sendmessage",
                    {
                        number,
                        message,
                    }
                )
                .then((r) => {
                    toast.success("Mensagem enviada");
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <ToastContainer />
            <section className="grid md:grid-cols-3 grid-cols-1 place-content-between md:px-20 px-2 md:gap-0 gap-10 items-center">
                <section>
                    <p className="font-bold text-lg py-4">Nos acompanhe!</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <a
                            href="https://apps.apple.com/br/app/tpt-the-personal-trainer/id6448254526"
                            target="_blank"
                            className="flex justify-center items-center"
                        >
                            <img
                                src={img1}
                                alt="disponivelAppStore"
                                className="w-45 h-15"
                            />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.tptthepersonaltrainer.app&hl=pt_BR"
                            target="_blank"
                            className="flex justify-center items-center"
                        >
                            <img
                                src={img2}
                                alt="disponivelGoogle"
                                className="w-40 h-13"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/@tpt-thepersonaltrainer"
                            target="_blank"
                            className="flex justify-center items-center"
                        >
                            <img
                                src={ytLogo}
                                alt="youtubeLogo"
                                className="w-13 h-13"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/tpt_thepersonaltrainer?igsh=MWtlNDRoanh5bmpxbA%3D%3D"
                            target="_blank"
                            className="flex justify-center items-center"
                        >
                            <img
                                src={instaLogo}
                                alt="instagramLogo"
                                className="w-13 h-13"
                            />
                        </a>
                    </div>
                </section>

                <section className=" hidden md:flex md:flex-col  items-center w-100 h-25 place-self-center">
                    <img
                        src={footerLogo}
                        alt="tptFooterLogo"
                        className="w-35 h-13"
                    />
                    <p>© 2025 Personal TPT</p>
                </section>

                <section className="flex flex-col items-center justify-center px-4">
                    <main className="">

                        <div className="flex  space-x-4 content-center place-self-center">
                            <FaWhatsapp size={50} />
                            <p className="place-self-center md:text-4xl text-lg font-bold">
                                Fale Conosco
                            </p>
                        </div>

                        <p className="text-lg font-medium">
                            Ainda com dúvidas? Mande uma mensagem que nosso time
                            entrará em contato
                        </p>

                        <div>
                            <form
                                onSubmit={(e) => {
                                    sendMessage(e);
                                }}
                            >
                                <textarea
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                    type="text"
                                    className="bg-white w-full p-2 my-3 text-black size-20 rounded-sm"
                                    placeholder="Digite sua mensagem aqui"
                                />

                                <div className="flex">
                                    <input
                                        value={telefone(number)}
                                        maxLength={15}
                                        onChange={(e) => setNumber(e.target.value)}
                                        type="text"
                                        placeholder="Numero de telefone"
                                        name=""
                                        id=""
                                        className="bg-white mr-2 w-full text-black p-2 rounded-sm size-10"
                                    />
                                    <button className="px-4 border-white border-2 cursor-pointer">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </section>

                <section className="md:hidden flex flex-col  items-center w-100 h-25 place-self-center">
                    <img
                        src={footerLogo}
                        alt="tptFooterLogo"
                        className="w-35 h-13"
                    />
                    <p>© 2025 Personal TPT</p>
                </section>

            </section>
        </>
    );
}
