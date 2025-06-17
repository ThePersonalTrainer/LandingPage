import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./Card.css";

export default function CardComponent({
  current,
  id,
  image,
  titulo,
  texto,
  descricao,
  click,
}) {
  return (
    <li className={`bg-white flex flex-col w-90 gap-5 shadow-2xl h-fit rounded-lg`}>
      <div className="image-container w-full">
        <img className="h-50 w-full rounded-t-lg" src={image} alt="Imagem do Card" />
      </div>
      <div className="px-5 flex flex-col gap-5 ">
        <h2 className="text-xl text-red-600 font-bold font-barlow ">
          {titulo}
        </h2>
        <p
          className={`text-md  font-poppins ${
            current ? "" : "line-clamp-3"
          }`}
        >
          {texto}
        </p>
        <p
          className={`${
            current ? "" : "hidden"
          } text-md font-poppins`}
        >
          {descricao}
        </p>
      </div>
      <div
        onClick={() => {
          click(id);
        }}
        className="flex place-content-center h-15 Baixo cursor-pointer"
      >
        <h3 className="flex place-content-center items-center gap-5 w-60 text-center rounded-lg text-xl place-self-center font-semibold text-gray-400 font-[Poppins] hover:bg-red-300 hover:text-red-700">
          {current? "Mostrar menos" : "Mostrar mais"}
          {current? <SlArrowUp />: <SlArrowDown />}
        </h3>
      </div>
    </li>
  );
}
