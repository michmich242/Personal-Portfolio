import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './Home.jsx'
import NavigationBar from "./NavigationBar.jsx";




function App(){

    function Layout(){
        return (
            <>
            <NavigationBar/>
            <Outlet/>
            </>
        );
    }




    return(

        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}></Route>
            </Route>
        </Routes>
    )

}


export default App;