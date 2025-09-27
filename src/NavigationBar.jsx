import { useEffect } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

function NavigationBar(){



    useEffect(()=>{
        if ("scrollRestoration" in history) history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
    }, []);


    return(
        <>
        <div className="NavigationBar-Container fade-in">
            <Link className="NavStyle" to="/">Home</Link>
            <Link className="NavStyle" to="/Projects">Projects</Link>
            <Link className="NavStyle" to="/Contact">Contact</Link>
        </div>
        </>

    );
}

export default NavigationBar;