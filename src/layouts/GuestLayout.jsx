import { Outlet } from "react-router-dom";
import Header from "../components/layoutComponent/Header";
import Footer from "../components/layoutComponent/Footer";

function GuestLayout() {
    return ( 
        <>
        <header>
            <Header />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default GuestLayout;