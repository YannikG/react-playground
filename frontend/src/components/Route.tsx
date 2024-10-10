import Home from "./pages/Home"

const getRoutes = () => {
    return [
        {
            path: "/",
            element: <Home />
        }
    ]
}

export {getRoutes};