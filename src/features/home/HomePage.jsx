import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
        <Button onClick={() => navigate("/")}>
            Home
        </Button>
        <Button onClick={() => navigate("/settings")}>
            Settings
        </Button>
    </div>
  );
}