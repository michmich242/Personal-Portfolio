import "./Projects.css";
import "./Experience.css";


const experiences = [
    {
        id: "SmartBlocks",
        company: "Smart Blocks",
        role: "AI Engineer Intern",
        duration: "June 2026 - Present",
        url: "https://smartblocks.ai",
        logo: "/smimage.jpeg",
        sizeDown: true,
        current: true,
        tech: ["TBM"],
        description: "Will be written very soon!"
    }
];


export default function Experience(){

    return (
        <div className="ProjectsContainer ExperienceContainer fade-in">
            {experiences.map(({ id, company, role, duration, url, logo, sizeDown, current, tech, description }) => (
                <div
                    key={id}
                    id={id}
                    className="Projects fade-in"
                    onClick={() => window.open(url, "_blank", "noopener, noreferrer")}
                >
                    <img className={sizeDown ? "size-down" : undefined} src={logo} alt={`${company} logo`} />
                    <div className="Attributes">
                        <h1 className="Title">
                            {role}
                            {current && <span className="project-tag">Current</span>}
                        </h1>
                        <p className="Company">{company} <span style={{color : "white"}}>|</span> <span className="Duration">{duration}</span></p>
                        <div className="ProjDetails">
                            {tech.map((item) => (
                                <p key={item} className="el_used">{item}</p>
                            ))}
                        </div>
                    </div>
                    <p className="Description">{description}</p>
                </div>
            ))}
        </div>
    );
}
