import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import AppLayout from "./layout";
import AllGamesPage from "../features/settings/AllPlayers";
import AllPlayersPage from "../features/settings/AllPlayers";

export function AppRouter() {
    return (
        <HashRouter>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/all-games" element={<AllGamesPage/>}/>
                    <Route path="/all-players" element={<AllPlayersPage/>}/>
                </Routes>
            </AppLayout>
        </HashRouter>
    )
}