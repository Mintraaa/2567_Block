import { Outlet } from "react-router";
import Header from './Header';
import Footer from "./Footer";

const Layout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
export default Layout;