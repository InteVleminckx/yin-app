import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button";
import PageHeader from "../../shared/components/PageHeader";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col ">
        <PageHeader title="Eejene Yinne" /> 
        <div className="flex-1 flex flex-col justify-around">
            <Button onClick={() => navigate("/")}>
                Nieuw Spel
            </Button>

            <div className="flex flex-col gap-4">
                <Button onClick={() => navigate("/all-players")}>
                    Alle Spelers
                </Button>
                <Button onClick={() => navigate("/all-games")}>
                    Alle Spellen 
                </Button>
            </div>
            </div>

    </div>
  );
}