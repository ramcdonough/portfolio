import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import knowledgeBase from "./knowledgeBase.json";

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const knowledgeBaseData = knowledgeBase;

export const ChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMessage: Message = {
            role: 'user',
            content: inputMessage
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);
        
        // Expand the chat box when a message is sent
        setIsCollapsed(false);

        // Check user input against knowledge base
        let assistantMessage: Message;
        const lowerCaseInput = inputMessage.toLowerCase();

        // Check for specific keywords in the user input
        if (lowerCaseInput.includes("introduction")) {
            assistantMessage = { role: 'assistant', content: knowledgeBaseData.introduction };
        } else if (lowerCaseInput.includes("skills")) {
            assistantMessage = { role: 'assistant', content: `My skills include: ${knowledgeBaseData.skills.join(", ")}.` };
        } else if (lowerCaseInput.includes("experience")) {
            assistantMessage = { role: 'assistant', content: knowledgeBaseData.experience.map(exp => `${exp.title} at ${exp.company} (${exp.duration}): ${exp.description.join(" ")}`).join("\n") || "No experience information available." };
        } else if (lowerCaseInput.includes("education")) {
            assistantMessage = { role: 'assistant', content: `${knowledgeBaseData.education.degree} from ${knowledgeBaseData.education.institution}` || "No education information available." };
        } else if (lowerCaseInput.includes("projects")) {
            assistantMessage = { role: 'assistant', content: `I have worked on projects like: ${knowledgeBaseData.projects.map(project => project.title).join(", ") || "No project information available."}.` };
        } else if (lowerCaseInput.includes("contact")) {
            assistantMessage = { role: 'assistant', content: knowledgeBaseData.contact.email || "No contact information available." };
        } else if (lowerCaseInput.includes("favorites") || lowerCaseInput.includes("music") || lowerCaseInput.includes("movies") || lowerCaseInput.includes("shows")) {
            const favorites = [];
            if (lowerCaseInput.includes("music")) {
                favorites.push(`My favorite music includes: ${knowledgeBaseData.favorites.music.join(", ")}.`);
            }
            if (lowerCaseInput.includes("movies")) {
                favorites.push(`My favorite movies include: ${knowledgeBaseData.favorites.movies.join(", ")}.`);
            }
            if (lowerCaseInput.includes("shows")) {
                favorites.push(`My favorite shows include: ${knowledgeBaseData.favorites.shows.join(", ")}.`);
            }
            assistantMessage = { role: 'assistant', content: favorites.join("\n") || "No favorites information available." };
        } else if (lowerCaseInput.includes("currents") || lowerCaseInput.includes("current music") || lowerCaseInput.includes("current shows")) {
            const currents = [];
            if (lowerCaseInput.includes("current music")) {
                currents.push(`I'm currently listening to: ${knowledgeBaseData.currents.music.join(", ")}.`);
            }
            if (lowerCaseInput.includes("current shows")) {
                currents.push(`I'm currently watching: ${knowledgeBaseData.currents.shows.join(", ")}.`);
            }
            assistantMessage = { role: 'assistant', content: currents.join("\n") || "No current information available." };
        } else if (lowerCaseInput.includes("hobbies")) {
            assistantMessage = { role: 'assistant', content: `Some of my hobbies include: ${knowledgeBaseData.personal.hobbies.join(", ")}.` };
        } else {
            // If no specific keywords match, use Gemini AI for a dynamic response
            const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY || '');
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

            try {
                const response = await model.generateContent(inputMessage);
                assistantMessage = {
                    role: 'assistant',
                    content: response.response.text() || "I'm sorry, I didn't understand that."
                };
            } catch (error) {
                console.error('Error generating response:', error);
                assistantMessage = { role: 'assistant', content: "Sorry, I encountered an error processing your request." };
            }
        }

        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
    };

    return (
        <div className="bg-[#1a1a1a] border border-gray-700/30 rounded-xl shadow-xl p-4 w-full flex flex-col">
            <div className="flex justify-between items-center">
                <h2 className="text-white font-bold mb-1">Chat</h2>
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white">
                    {isCollapsed ? '▼' : '▲'}
                </button>
            </div>
            <div className={`flex-1 space-y-4 mb-4 chat-transition ${isCollapsed ? 'chat-collapsed' : 'chat-expanded'}`}>
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user' ? 'bg-blue-500/20 text-white' : 'bg-white/5 text-gray-300'}`}>
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                    </div>
                ))}
                {isLoading && !isCollapsed && (
                    <div className="flex justify-start">
                        <div className="bg-white/5 rounded-lg p-3">
                            <div className="flex space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <form onSubmit={sendMessage} className="flex gap-2">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="AI Assistant Powered by Gemini"
                    className="flex-1 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-blue-500/20 text-white rounded-lg hover:bg-blue-500/30 transition-colors disabled:opacity-50"
                >
                    Send
                </button>
            </form>
        </div>
    );
}; 