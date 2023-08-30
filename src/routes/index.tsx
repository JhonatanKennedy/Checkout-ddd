import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import { Checkout } from "@/pages/Checkout/index.tsx";
import { About } from "@/pages/About/index.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/checkout" />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
        errorElement: <span>Erro Checkout</span>,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <span>Erro About</span>,
    },
]);

export const Router = () => {
    return <RouterProvider router={routes} />;
};
