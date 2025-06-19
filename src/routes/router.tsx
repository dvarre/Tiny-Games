import { createBrowserRouter } from "react-router-dom";
import LobbyCreation from "../pages/LobbyCreation";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/lobby-creation",
        element: <LobbyCreation/>,
    },

    // TODO Créer une page et redirection pour les 404 et autres erreurs
]);


export default router;