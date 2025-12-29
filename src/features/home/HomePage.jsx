import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Home</h1>

      <button
        className="bg-blue-600 text-white p-4 rounded-xl"
      >
        Start Game
      </button>

      <button
        className="bg-gray-800 text-white p-4 rounded-xl"
      >
        Settings
      </button>
    </div>
  );
}