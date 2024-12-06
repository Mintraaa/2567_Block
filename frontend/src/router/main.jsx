import {  StringMode } from "react" ;
import {  createRoot } from "react-dom/client" ;
import "./index.css" ;
import router from "./Router/Router"; 
import { RouterProvider  } from     "react-router";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);