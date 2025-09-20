import {BrowserRouter} from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App(){
    const [theCo, setColor] = useState(false);

    function theClick(){
        console.log("Hee clicked me");
        setColor((prev) => {return !prev});

    }


    return (
        <>
        <h1>Hello man</h1>
        <button
         id="Cool" 
         style=
         {{color : "gray", 
            backgroundColor : theCo ? "red" : "green"
        }} 
        onClick={theClick}
        >Try clicking me
        </button>
        </>
    )


}

export default App;