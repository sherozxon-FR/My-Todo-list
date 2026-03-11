import { createBrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import Home from "./pages/Home";
import Active from "./pages/Active";
import Completed from "./pages/Completed";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "active",
                element: <Active />,
            },
            {
                path: "completed",
                element: <Completed />,
            },
        ],
    },
]);