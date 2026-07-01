import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './Home.jsx'
import NavigationBar from "./NavigationBar.jsx";
import Projects from "./Projects.jsx"
import Experience from "./Experience.jsx";
import Contact from "./Contacts.jsx"



function App(){

    function Layout(){
        return (
            <>
            <NavigationBar/>
            <Outlet/>
            <footer>
                <p> © 2026 Michel Karam. All rights reserved.</p>
            </footer>
            </>
        );
    }




    return(

        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Experience' element={<Experience/>}></Route>
                <Route path="/Projects" element={<Projects/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
            </Route>
        </Routes>
    )

}


export default App;