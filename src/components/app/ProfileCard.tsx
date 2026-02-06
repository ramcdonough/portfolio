import React from 'react';
import { useNavigate } from 'react-router-dom';
interface ProfileCardProps {
    logo: string;
    logoAlt: string;
    title: string;
    subtitle: string;
    date: string;
    description?: string | null;
    link?: string | null;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
    logo,
    logoAlt,
    title,
    subtitle,
    date,
    description = null,
    link = null,
}) => {
    const navigate = useNavigate();

    return(
    <div
        className="group card-breathe bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 md:hover:border-accent/40 md:hover:bg-white/10 transition-all duration-300 md:hover:scale-[1.02] md:hover:shadow-lg md:hover:shadow-accent/10 cursor-pointer flex flex-col items-center h-fit
         max-md:border-accent/30 max-md:bg-white/10 max-md:shadow-lg max-md:shadow-accent/10"
        onClick={link ? () => navigate(link) : undefined}
    >
        <div className="w-full p-6">
            <div className="w-40 h-20 flex items-center justify-center mx-auto">
                <img
                    src={logo}
                    alt={logoAlt}
                    className="max-h-full w-auto object-contain grayscale md:group-hover:grayscale-0 transition-all max-md:grayscale-0"
                />
            </div>
            <div className="mt-4 text-center transform transition-all w-full">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm opacity-75">{subtitle}</p>
                <p className="text-xs opacity-60">{date}</p>
                {description && (
                    <div className="max-h-0 md:group-hover:max-h-20 overflow-hidden transition-all duration-300 max-md:max-h-none">
                        <p className="text-xs leading-relaxed mt-2">
                            {description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>)
}; 