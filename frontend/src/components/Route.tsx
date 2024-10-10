import Home from "./pages/Home"

const getRoutes = () => {
    return [
        {
            path: "/:stop?",
            element: <Home />
        }
    ]
}

export {getRoutes};