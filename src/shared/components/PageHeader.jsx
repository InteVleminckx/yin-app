import { useNavigate } from "react-router-dom";

export default function PageHeader({ title, backTo }) {
  const navigate = useNavigate();

  return (
    <header className="grid grid-cols-3 items-center h-14">
      {/* Left slot */}
      <div className="justify-self-start">
        {backTo && (
          <button
            onClick={() => navigate(backTo)}
            className="text-blue-600 text-lg font-medium"
          >
            ← Terug
          </button>
        )}
      </div>

      {/* Center slot (true center) */}
      <h1 className="justify-self-center text-xl font-semibold truncate">
        {title}
      </h1>

      {/* Right slot (reserved space) */}
      <div className="justify-self-end"></div>
    </header>
  );
}
