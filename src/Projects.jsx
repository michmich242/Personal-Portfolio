import "./Projects.css"




function Projects(){




    return (
        <>
        <div className="ProjectsContainer fade-in">
            <div id="PrepAndCount" className="Projects fade-in" onClick={() =>{
                window.open("https://github.com/michmich242/PrepAndCount", "_blank", "noopener, noreferrer");
            }}>
                <img src="/protein.png"></img>
                <div className="Attributes">
                    <h1 className="Title">Prep&Count</h1>
                    <div className="ProjDetails">
                        <p className="el_used">React-Native</p>
                        <p className="el_used">MongoDB</p>
                        <p className="el_used">Express</p>
                        <p className="el_used">RestAPI's</p>
                    </div>
            
                </div>
                <p className="Description">A full-stack 3-in-1 fitness app for AI-driven meal planning. It combines workout tracking, nutrition logging, and personalized meal planning. The project integrates OpenAI for smart recommendations. </p>
            </div>
            
            <div id="SlimNet" className="Projects fade-in" onClick={() => {
                window.open("https://github.com/michmich242/SlimNet", "_blank", "noopener, noreferrer");
            }}>
                <img className="size-down" src="/neural-network.png"></img>
                <div className="Attributes">
                    <h1 className="Title">SlimNet</h1>
                    <div className="ProjDetails">
                        <p className="el_used">Python</p>
                        <p className="el_used">TensorFlow</p>
                        <p className="el_used">Keras</p>
                    </div>
                </div>
                <p className="Description">A research framework designed to evaluate and optimize lightweight deep learning models in constrained environments. SlimNet demonstrates how <span style={{"color" : "#e88d15"}}>Convolutional Neural Networks</span> can be "slimmed" down and quantized for real-world deployment, while preserving the models accuracy.</p>
            </div>
            <div id="ML-Wumpus" className="Projects fade-in" onClick={() => {
                window.open("https://github.com/michmich242/ML-Wumpus-World", "_blank", "noopener, noreferrer");
            }}>
                <img className ="size-down" src="/classification.png"></img>
                <div className="Attributes">
                    <h1 className="Title">Wumpus World</h1>
                    <div className="ProjDetails">
                        <p className="el_used">Python</p>
                        <p className="el_used">MatPlotLib</p>
                    </div>
                </div>
                <p className="Description">The Wumpus Project explores AI strategies in a grid-based "Wumpus World", a problem of reasoning under uncertainty. We implemented and compared 3 ML main methods, <span style={{"color" : "aqua"}}>A*</span>, <span style={{"color" : "#12db91"}}>Genetic Algorithms</span>, and <span style={{"color" : "#de101d"}}>Reinforcement Learning (Tabular Q-Learning)</span>.</p>
            </div>
            <div id="Arizon-TradeAd" className="Projects fade-in" onClick={() => {
                window.open("https://github.com/michmich242/Arizon-TradeAd", "_blank", "noopener, noreferrer");
            }}>
                <img className="size-down" src="/Roblox.png"></img>
                <div className="Attributes">
                    <h1 className="Title">Arizon-TradeAd</h1>
                    <div className="ProjDetails">
                        <p className="el_used">Node.js</p>
                        <p className="el_used">RestAPI's</p>
                        <p className="el_used">Discord</p>
                    </div>

                </div>
                <p style={{"padding" : "2px 2px 2px"}}className="Description">Discord-based notifier, trade analyzer, and trade advertisement sender built for Roblox item trading enthusiasts. Designed with the Roblox community in mind, this bot delivers real-time inbound trade alerts directly to your Discord server, complete with RAP (Recent Average Price) and Rolimon's value comparisons to help you make smarter trading decisions.</p>
            </div>
            <div id="PortfolioWeb" className="Projects fade-in" onClick={() => {
                window.open("https://github.com/michmich242/Personal-Portfolio", "_blank", "noopener, noreferrer");
            }}>
                <img className="size-down" src="/briefcase.png"></img>
                <div className="Attributes">
                    <h1 className="Title">Personal Portfolio</h1>
                    <div className="ProjDetails">
                        <p className="el_used">React</p>
                        <p className="el_used">Vite</p>
                        <p className="el_used">JavaScript</p>
                    </div>
                </div>
                    <p className="Description">A portfolio website I built to learn modern frontend development. It highlights my projects while practicing practical design and CSS animations. Completed in 2 weeks.</p>
            </div>
        </div>
        </>
        
    )
}


export default Projects;