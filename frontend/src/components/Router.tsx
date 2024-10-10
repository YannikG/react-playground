import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { getRoutes } from "./Route";

const Router = () => {
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <Outlet />,
                children: [...getRoutes()],
            },
        ]
    );

    return <RouterProvider router={router} />
};

export default Router;