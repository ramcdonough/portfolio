import React from "react";

interface TimelinePageProps {
    children: React.ReactNode;
}

export const TimelinePage: React.FC<TimelinePageProps> = ({ children }) => {
    return (
        <div className="flex justify-center px-2 sm:px-3 min-h-full">
            <div className="w-full lg:mt-10 md:w-2/3 px-2 sm:px-5 text-primary pb-10">
                {children}
            </div>
        </div>
    );
}; 