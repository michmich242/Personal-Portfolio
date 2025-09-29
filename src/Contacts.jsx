import "./Contacts.css"


function Contact(){
    
    return(
        <>
        <div className="fade-in">
            <h1 id="Container-Title">Let's Get Connected!</h1>
            <div className="Contact-Container">
                    <div id= "gmail" className="Contact-info fade-in" onClick={() => {
                        window.open("mailto:karammichel920@gmail.com", "_blank", "noopener, noreferrer");

                    }}>
                        <h1 className="Contact-Text">Gmail</h1>
                        <img className="Image-Contact" src="/gmail.png"></img>
                    </div>
                    <div id="linkedin" className="Contact-info fade-in" onClick={() => {
                        window.open("https://www.linkedin.com/in/michel-karam-9113432a7/", "_blank", "noopener, noreferrer");

                    }}>
                        
                        <h1 className="Contact-Text">Linkedin</h1>
                        <img className="Image-Contact" src="/linkedin.png"></img>

                    </div>

                    <div id="github" className="Contact-info fade-in" onClick={() => {
                        window.open("https://github.com/michmich242", "_blank", "noopener, noreferrer");

                    }}>
                        
                        <h1 className="Contact-Text">GitHub</h1>
                        <img className="Image-Contact" src="/github.png"></img>

                    </div>
            </div>
        </div>
        </>

    );
}

export default Contact;