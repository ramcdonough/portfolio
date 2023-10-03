import linkedin from "../../svg/linkedin.svg";
import github from "../../svg/github.svg";
import email from "../../svg/email.svg";

interface SocialsProps {
    vertical?: boolean;
}

export const Socials: React.FC<SocialsProps> = ({ vertical = false }) => {
    return (
        <div className={`flex ${vertical ? "flex-col gap-32 " : ""} `}>
            <a
                className="btn-ghost btn flex h-auto"
                href="https://www.linkedin.com/in/ryan-mcdonough2/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={linkedin}
                    className={vertical ? "w-32 h-32 drop-shadow-lg" : "w-8"}
                    alt="LinkedIn"
                />
            </a>
            <a
                className="btn-ghost btn flex h-auto"
                href="mailto:McDonoughRyan95@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={email}
                    className={vertical ? "w-32 h-32 drop-shadow-lg" : "w-8"}
                    alt="Email"
                />
            </a>
            <a
                className="btn-ghost btn flex h-auto"
                href="https://github.com/ramcdonough"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={github}
                    className={vertical ? "w-32 h-32 drop-shadow-lg" : "w-8"}
                    alt="Github"
                />
            </a>
        </div>
    );
};
