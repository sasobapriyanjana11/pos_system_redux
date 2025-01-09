import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./component/RootLayout.tsx";
import { Dashboard } from "./pages/Dashboard";
import { Error } from "./pages/Error";
import {Add} from "./pages/Add.tsx";
import {Update} from "./pages/Update.tsx";
import {Delete} from "./pages/Delete.tsx";


function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                { path: "/", element: <Dashboard/> },
                { path: "/add", element: <Add/> },
                { path: "/update", element: <Update/> },
                { path:"/delete",element:<Delete/>}
            ],
            errorElement: <Error />,
        },
        {
            path: "*",
            element: <Error />,
        },
    ]);

    return (
        <RouterProvider router={routes} />
    )
}

export default App