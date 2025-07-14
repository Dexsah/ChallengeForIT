import { useNavigate } from "react-router-dom";
import type { Task } from "../page/View-task";

interface Props extends Task {
  onDelete: () => void;
}

export const Card = ({ name, description, completed, id, onDelete }: Props) => {
  const navigate = useNavigate();
  const route = `/${id}`;

  return (
    <div className="bg-[url('./img/paper.png')] bg-cover flex shadow-xl rounded-sm flex-col items-center h-[19rem] relative p-2">
      <p
        className={`font-uncial text-4xl mb-5 mt-1 ${
          completed ? `line-through` : ""
        }`}
      >
        {name}
      </p>
      <p className="font-medieval text-lg text-gray-700">{description}</p>
      <button
        onClick={() => navigate(route)}
        className="flex items-center gap-2 py-1.5 px-3 rounded-lg text-black font-medium shadow-xl hover:bg-gray-400/30 absolute bottom-6 left-9 font-medieval"
      >
        Editar
        <img className="w-4 h-4" src="/img/feather.png" alt="editar" />
      </button>
      <button
        onClick={onDelete}
        className="flex items-center gap-2 py-1.5 px-3 rounded-lg text-black font-medium shadow-xl hover:bg-gray-400/30 absolute bottom-6 right-9 font-medieval"
      >
        Borrar
        <img className="w-4 h-4" src="/img/trash.png" alt="editar" />
      </button>
    </div>
  );
};
