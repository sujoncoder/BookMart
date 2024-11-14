import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/orders",
                element: <h1>orders</h1>
            },
            {
                path: "/about",
                element: <h1>about</h1>
            }
        ]
    },
]);

export default router;