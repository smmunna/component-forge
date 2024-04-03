import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ui/ErrorPage";
import App from "../App";
import About from "../pages/About/About";
import Documentation from "../layout/Documentation";
import Forms from "../pages/Documentation/Forms/Forms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />  //Insert your Home  Page component here
            },
            {
                path: "/documentation",
                element: <Documentation />,
                children: [
                    {
                        path: "",
                        element: <App />  //Insert your Home  Page component here
                    },
                    {
                        path: "forms",
                        element: <Forms />
                    }
                ]
            },
            {
                path: "/about",
                element: <About />,  //Insert your About Page component here
            },
            // Include others routes here;
            //................................................................
            //................................................................
        ]
    }
]);

export default router;