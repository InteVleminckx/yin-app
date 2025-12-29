import { useNavigate } from "react-router-dom";
import PageHeader from "../../shared/components/PageHeader";

export default function AllGamesPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col">
        <PageHeader 
            title="Alle Spellen" 
            backTo="/"
        /> 
    </div>
  );
}