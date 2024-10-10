import HomePage from "./pages/HomePage"

const getRoutes = () => {
    return [
        {
            path: "/:stop?",
            element: <HomePage />
        }
    ]
}

export {getRoutes};