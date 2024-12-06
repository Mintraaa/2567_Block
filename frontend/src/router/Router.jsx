import { createBrowserRouter  } from 'react-router';    
import Home  from "../page/Home" ;
import Edit from "../page/Edit" ;
import PostDetail  from "../page/PostDetail" ;
import Create from "../page/Create" ;
import Login from "../page/Login" ;
import Register from "../page/Register" ;
import Layout from "../components/Layout" ;

const router = createBrowserRouter([

    { path: "/" , element: <Layout/>, Children:[
        
    { path: "/edit/:id" , element: <Edit /> },
    { path: "/create" , element: <Create /> },
    { path: "/post/:id" , element: <PostDetail /> },
    { path: "/login" , element: <Login /> },
    { path: "/register" , element: <Register /> },
    ]},
])
export default router;