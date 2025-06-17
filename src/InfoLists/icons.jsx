import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaRegClipboard } from "react-icons/fa";
import { BsDiagram3 } from "react-icons/bs";
import { HiOutlineDuplicate } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";
import { PiBarbellLight } from "react-icons/pi";

const infos = [
  {
    icon: <AiOutlinePlayCircle size={30} />,
    titulo: "Exercícios com Vídeos",
    descricao: "São mais de 400 exercícios com vídeos",
  },
  {
    icon: <PiBarbellLight size={30} />,
    titulo: "Biblioteca de Exercícios",
    descricao:
      "Crie sua própria biblioteca de exercícios (vídeos do Youtube ou do seu dispositivo)",
  },
  {
    icon: <FaRegClipboard size={30} />,
    titulo: "Modelos de Treinamentos",
    descricao:
      "Modelos de Treinamentos: Iniciantes, Intermediários e Avançados",
  },
  {
    icon: <BsDiagram3 size={30} />,
    titulo: "Métodos de Treinamento",
    descricao:
      "Métodos avançados com layouts específicos: Circuito, Drop-set, Rest-pause, Conjugados, Piramidal, FST-7, etc",
  },
  {
    icon: <HiOutlineDuplicate size={30} />,
    titulo: "Duplicar/Exportar Treinos",
    descricao:
      "Duplique ou exporte Treinamentos para outros alunos com um clique",
  },
  {
    icon: <IoIosPhonePortrait size={30} />,
    titulo: "Acompanhamento Presencial",
    descricao: "Acompanhamento do Treinamento de alunos presenciais",
  },
];

export default infos;