import React from 'react';

interface ProfileCardProps {
    logo: string;
    logoAlt: string;
    title: string;
    subtitle: string;
    date: string;
    description: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
    logo,
    logoAlt,
    title,
    subtitle,
    date,
    description
}) => (
    <div className="group bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center h-fit">
        <div className="w-full p-6">
            <div className="w-40 h-20 flex items-center justify-center mx-auto">
                <img 
                    src={logo}
                    alt={logoAlt}
                    className="max-h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all" 
                />
            </div>
            <div className="mt-4 text-center transform transition-all w-full">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm opacity-75">{subtitle}</p>
                <p className="text-xs opacity-60">{date}</p>
                <div className="max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-300">
                    <p className="text-xs leading-relaxed mt-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
); 