import linkedin from "../../svg/linkedin.svg";
import github from "../../svg/github.svg";
import email from "../../svg/email.svg";

export const Socials = () => {
    return (
        <div className="flex">
            <a
                className="btn-ghost btn"
                href="https://www.linkedin.com/in/ryan-mcdonough2/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={linkedin} className="" alt="LinkedIn" />
            </a>
            <a
                className="btn-ghost btn"
                href="mailto:McDonoughRyan95@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={email} className="" alt="Email" />
            </a>
            <a
                className="btn-ghost btn"
                href="https://github.com/ramcdonough"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={github} className="" alt="Github" />
            </a>
        </div>
    );
};
