export default function CardInfo({icon, titulo, descricao}) {
  return (
    <li className="px-5 place-self-center rounded-lg w-80 h-50 hover:scale-110 ease-in-out duration-200 shadow-sm/20 shadow-gray-500 bg-white py-5">
      <h2 className="text-red-500 flex items-center gap-2 text-xl font-bold">
        {icon}
        {titulo}
      </h2>
      <p className="text-gray-700 text-lg">
        {descricao}
      </p>
    </li>
  );
}
