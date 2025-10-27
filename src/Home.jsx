import "./Home.css";
import "./Home-Tablet.css"
import "./Home-Phone.css"
import { useState, useEffect } from "react"
import LightBox from "./LightBox.jsx"

function Home(){

    const [open, setOpen] = useState(false);


    return (
        <>
        <div className="AboutInfo">
            
            <div className="AboutMe fade-in">
                <div className="WelcomeTop fade-in">
                    <h1 id="Welcome"  className="fade-in">About me</h1>
                    <div id="Desc_Pic">
                        <p id="InfoAbout" className="fade-in">Hello, my name is Michel Karam, and I am from Portland Oregon. I'm a passionate Senior Computer Science major at Portland State University! I enjoy researching AI, ML algorithms, and software engineering. My goal is to become a software engineer who builds technology that makes life easier and more enjoyable. Outside of Computer Science, I love playing basketball, travelling, and trying out new food!</p>
                        <img id="MichelK" src="/MichelK.png"></img>
                    </div>

                </div>
            </div>
            <div id="Education" className="AboutMe fade-in">
                <h1 id="EducationLevel" className="fade-in">Education</h1>
                <div id="PSUInfo" className="fade-in">
                    <img className="UniLogo fade-in" src="/logomark_green.png"></img>
                    <div style={{"marginTop" : "10px"}}>
                        <h2 className="fade-in">Portland State University</h2>
                        <p>B.S. in Computer Science  September 2023 - March 2026</p>
                        <p style={{"marginTop" : "10px "}}>Relevant Coursework: Data Structures, Algorithms & Complexity, DBMS, Applied Linear Algebra, AI</p>
                    </div>
                </div>
                <div className="PCCInfo fade-in">
                    <img id="PCCAdjust" className="UniLogo fade-in" src="/PCC-Primary-Logo-R_Turquoise.png"></img>
                    <div>
                        <h3 id="PCCHeading">Portland Community College</h3>
                        <p>January 2022 - September 2023</p>
                        <p style={{"marginTop" : "10px"}}>Completed an early college high school program, earning college and high school credits concurrently.</p>
                    </div>
                </div>

            </div>
            <div className="Documentation-Container AboutMe fade-in">
                <h1 id="Docs-Title">Documentation</h1>
                <div className="Resume-Container">
                    <a href="/MichelK-Resume.pdf" target="_blank" rel="noopener noreferrer" className="ResumeButton">
                    Resume
                    </a>

                    <img
                        className="ResumeThumb"
                        src="/MichelK-Resume.png"
                        alt="Resume preview"
                        onClick={() => setOpen(true)}
                    />

                    {open && <LightBox src={"/MichelK-Resume.png"} onClose={() => setOpen(false)} />}
                </div>
            </div>
            <div id="Skills" className="AboutMe fade-in">
                
                <div id="Technical_Skills" className="AboutMe fade-in">
                    <h4 className="TechTitle">Technical Skills</h4>
                    <h4 id="LanguageTitle">Languages</h4>

                    <div className="SCard-Container">

                        <div className="SCard">
                        <img src="/python.png"></img>
                        <p className="Card-Name">Python</p>
                        </div>
                        <div className="SCard">
                            <img src="/java-script.png"></img>
                            <p className="Card-Name overflow-handle">JavaScript</p>
                        </div>
                        <div className="SCard">
                            <img src="/c-.png"></img>
                            <p className="Card-Name">C/C++</p>
                        </div>
                        <div className="SCard">
                            <img src="/java.png"></img>
                            <p className="Card-Name">Java</p>
                        </div>
                        <div className="SCard">
                            <img src="/html.png"></img>
                            <p className="Card-Name">HTML</p>
                        </div>
                        <div className="SCard">
                            <img src="/css-3.png"></img>
                            <p className="Card-Name">CSS</p>
                        </div>

                    </div>
                    <div className="FrameWorks fade-in">
                        <h6 id="FrameWorksTitle">FrameWorks - Libraries - RunTime Env - DBMS</h6>
                        <div className="SCard-Container fade-in">
                            <div className="SCard">
                                <img src="/science.png"></img>
                                <p className="Card-Name overflow-handle">React/React-Native</p>
                            </div>
                            <div className="SCard">
                                <img src="/node-js.png"></img>
                                <p className="Card-Name">Node.js</p>
                            </div>
                            <div className="SCard">
                                <img src="/postgresql.png"></img>
                                <p className="Card-Name overflow-handle">PostgreSQL</p>
                            </div>
                            <div className="SCard">
                                <img src="/database-storage.png"></img>
                                <p className="Card-Name">MongoDB</p>
                            </div>
                        
                        </div>
                    </div>

                </div>
                <div id="Soft_Skills" className="AboutMe fade-in">
                    <h5 className="TechTitle fade-in">Soft Skills</h5>
                    <div className="SCard-Container fade-in">
                        <div className="SCard">
                            <img src="/indep.png"></img>
                            <p className="Card-Name overflow-handle">Independent/Dependable</p>
                        </div>
                        <div className="SCard">
                            <img src="/time.png"></img>
                            <p className="Card-Name overflow-handle">Time Management</p>
                        </div>
                        <div className="SCard">
                            <img src="/open-mind.png"></img>
                            <p className="Card-Name overflow-handle">Actively Listening</p>
                        </div>
                        <div className="SCard">
                            <img src="/search-file.png"></img>
                            <p className="Card-Name overflow-handle">Attention to Detail</p>
                        </div>
                        <div className="SCard">
                            <img src="/problem-solving-skills.png"></img>
                            <p className="Card-Name overflow-handle">Problem Solving</p>
                        </div>
                        <div className="SCard">
                            <img src="/decision.png"></img>
                            <p className="Card-Name overflow-handle">Critical Thinking</p>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        </>


    );
}

export default Home;