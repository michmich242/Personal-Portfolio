import "./Home.css";

function Home(){



    return (
        <>
        <div className="AboutInfo">
            
            <div className="AboutMe fade-in">
                <div className="WelcomeTop fade-in">
                    <h1 id="Welcome"  className="fade-in">About me</h1>
                    <p id="InfoAbout" className="fade-in">Hello, my name is Michel Karam, and I am from Portland Oregon. I'm a passionate Senior Computer Science major at Portland State University! I enjoy researching AI, ML algorithms, and software engineering. My goal is to become a software engineer who builds technology that makes life easier and more enjoyable. Outside of Computer Science, I love playing basketball, travelling, and trying out new food!</p>
                </div>
            </div>
            <div id="Education" className="AboutMe">
                <h1 id="EducationLevel" className="fade-in">Education</h1>
                <img id="PSULogo" src="/src/assets/logomark_green.png"></img>
                <div id="UniInfo">
                    <h2 id="UniName" className="fade-in">Portland State University</h2>
                    <p>B.S. in Computer Science  September 2023 - March 2026</p>
                </div>
                

            </div>
            <div className="Projects">
                <h1>Prep&Count</h1>
            </div>
                
        </div>
        </>


    );
}

export default Home;