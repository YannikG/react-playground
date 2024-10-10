import ConnectionPage from "./pages/ConnectionPage";
import HomePage from "./pages/HomePage"

const getRoutes = () => {
    return [
        {
            path: "/:stop?",
            element: <HomePage />
        },
        {
            path: "/connection/:number",
            element: <ConnectionPage />
        }
    ]
}

export {getRoutes};