

export default function CardLastComponent({image, title, text}) {
  return (
    <li className="w-70 h-70 bg-white rounded-lg shadow-sm/50 shadow-gray-500 hover:scale-105 duration-200">
      <div className="h-2 bg-red-500 rounded-t-lg w-100%"></div>
      <div className="flex flex-col gap-5 px-5">
        <img
          className="w-20 place-self-center pt-4"
          src={image}
          alt="Person image"
        />
        <h2 className="text-xl font-bold text-gray-700 text-center">
          {title}
        </h2>
        <p className="text-center">
          {text}
        </p>
      </div>
    </li>
  );
}
