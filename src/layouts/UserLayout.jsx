import { Outlet } from "react-router-dom";

function UserLayout() {
    return ( 
        <>
             <header>
            Header
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            Footer
        </footer>
        </>
     );
}

export default UserLayout;