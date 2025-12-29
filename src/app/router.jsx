import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import AppLayout from "./layout";

export function AppRouter() {
    return (
        <HashRouter>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/settings" element={<HomePage/>}/>
                </Routes>
            </AppLayout>
        </HashRouter>
    )
}