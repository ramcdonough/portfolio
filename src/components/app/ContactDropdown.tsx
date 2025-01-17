import { Socials } from "./Socials";
import { useState } from "react";

export const ContactDropdown = () => {
    const [copyText, setCopyText] = useState("Copy");

    const handleCopy = () => {
        navigator.clipboard.writeText("McDonoughRyan95@gmail.com");
        setCopyText("Copied!");
        setTimeout(() => {
            setCopyText("Copy");
        }, 2000);
    };

    return (
        <div className="bg-[#1a1a1a] border border-gray-700/30 rounded-xl shadow-2xl p-4 w-[min(360px,90vw)] max-h-[90vh] overflow-y-auto">
            <div className="space-y-4">
                {/* Header with subtle gradient border */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur" />
                    <div className="relative bg-[#1a1a1a] rounded-lg p-3">
                        <h3 className="text-white text-md font-medium text-center">Let's Connect</h3>
                    </div>
                </div>

                {/* Email with hover effect */}
                <div className="group flex items-center justify-between bg-white/5 rounded-lg p-3 transition-all hover:bg-white/10">
                    <a 
                        href="mailto:McDonoughRyan95@gmail.com"
                        className="flex-grow"
                    >
                        <div className="flex flex-col text-center">
                            <span className="text-white text-sm md:text-xs break-words group-hover:text-blue-300 transition-colors">
                                McDonoughRyan95@gmail.com
                            </span>
                        </div>
                    </a>
                    <button
                        onClick={handleCopy}
                        className="ml-2 px-2 py-1 text-xs text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-all"
                    >
                        {copyText}
                    </button>
                </div>

                {/* Social links with new styling */}
                <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-center gap-6">
                        <Socials iconColor="white" size="md" />
                    </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-gray-300">Open to opportunities</span>
                </div>
            </div>
        </div>
    );
};
