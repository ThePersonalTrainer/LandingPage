import app1 from '/appexemple1.jpeg';
import app2 from '/appexemplo2.jpeg';
import app3 from '/appexemple3.jpeg';
import app4 from '/appexemple4.png';
import cApp1 from '/andreApp.png';
import cApp2 from '/joctanApp.png';
import cApp3 from '/jonatasApp.png';
import cApp4 from '/RicardoApp.png';
import { useEffect, useState } from 'react';


export default function MiddleSection() {

    const carouselImages = [cApp1, cApp2, cApp3, cApp4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % carouselImages.length
            );
        }, 3000);
        return () => clearInterval(timer);
    }, [carouselImages.length]);

    return (
        <section className="h-fit py-16 bg-gradient-to-t from-footer via-redTpt to-footer text-white flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-20 px-4">
            <div className="text-center md:text-left max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Tenha seu próprio App 100% personalizado com sua Logo e Cores
                </h1>
                <h2 className="text-lg md:text-xl leading-relaxed">
                    Você nos envia sua identidade visual como, versões de sua Logo e cores, e nós fazemos sua versão em até 5 dias úteis.
                </h2>
            </div>
            <div className='flex-row-2'>
                <div className="flex items-start">
                    <div className="relative w-64 h-fit md:w-72">
                        <img
                            src={carouselImages[currentImageIndex]}
                            alt="App Screenshot"
                            className="w-165 h-120 object-contain transition-opacity duration-700 ease-in-out"
                        />
                        <div className="flex absolute left-26 bottom-5">
                            {carouselImages.map((v,i) => {
                                return <div key={i} className={`text-[40px] text-black/60 ${currentImageIndex === i? "text-red-600" : ""}`}>•</div>
                            })}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-8">
                        <img
                            src={app4}
                            alt="Logo 1"
                            className="size-24 object-contain rounded-lg"
                        />
                        <img
                            src={app1}
                            alt="Logo 2"
                            className="size-24 object-contain rounded-lg"
                        />
                        <img
                            src={app3}
                            alt="Logo 3"
                            className="size-24 object-contain rounded-lg"
                        />
                        <img
                            src={app2}
                            alt="Logo 4"
                            className="size-24 object-contain rounded-lg"
                        />
                    </div>
                </div>
                <p className="mt-6 text-sm text-center">
                    Alguns Apps Personalizados de Nossos Clientes
                </p>
            </div>
        </section>
    );
}
