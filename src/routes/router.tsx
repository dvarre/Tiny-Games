import { createBrowserRouter } from "react-router-dom";
import LobbyCreation from "../pages/LobbyCreation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LobbyCreation/>
    },

    // TODO Créer une page et redirection pour les 404 et autres erreurs
]);


export default router;