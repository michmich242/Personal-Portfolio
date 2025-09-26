import "./background.css";
import { useMemo } from "react";

function Background(){

    const spans = useMemo(() => {
        return Array.from({length : 80}, () => {
            return Math.random() * 30 + 2;
        })
    }, []);


    


    return (
        <>
        <div className="container">
            <div className="light">
                {spans.map((val, index) =>(
                    <span key={index} style ={{"--i" : val}}></span>
                ))}

            </div>
        </div>
        </>
    )


}

export default Background;