import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </div>
    );
};

export default AppRoutes;