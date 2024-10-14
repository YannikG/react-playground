import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { getRoutes } from "./Route";
import Container from "./lib/Container";
import Nav from "./sub/Nav";

const Router = () => {
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: 
                <>
                    <Nav />
                    <Container>
                        <Outlet />
                    </Container>      
                </>,
                children: [...getRoutes()],
            },
        ]
    );

    return <RouterProvider router={router} />
};

export default Router;