import linkedin from "../../svg/linkedin.svg";
import github from "../../svg/github.svg";
import email from "../../svg/email.svg";

interface SocialsProps {
    vertical?: boolean;
    iconColor?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const Socials: React.FC<SocialsProps> = ({ 
    vertical = false, 
    iconColor = 'currentColor',
    size = 'sm'
}) => {
    const sizeClasses = {
        sm: 'w-6',
        md: 'w-8',
        lg: 'w-32 h-32'
    };

    const iconClass = `${sizeClasses[size]} ${iconColor === 'white' ? 'brightness-0 invert' : ''}`;

    return (
        <div className={`flex ${vertical ? "flex-col gap-32" : "gap-4"}`}>
            <a
                className="btn-ghost btn flex h-auto p-2 hover:scale-110 transition-transform"
                href="https://www.linkedin.com/in/ryan-mcdonough2/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={linkedin}
                    className={iconClass}
                    alt="LinkedIn"
                />
            </a>
            <a
                className="btn-ghost btn flex h-auto p-2 hover:scale-110 transition-transform"
                href="mailto:McDonoughRyan95@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={email}
                    className={iconClass}
                    alt="Email"
                />
            </a>
            <a
                className="btn-ghost btn flex h-auto p-2 hover:scale-110 transition-transform"
                href="https://github.com/ramcdonough"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={github}
                    className={iconClass}
                    alt="Github"
                />
            </a>
        </div>
    );
};
