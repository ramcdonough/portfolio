import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { Nav } from './components/app/Nav';
import { Analytics } from "@vercel/analytics/react"

function App() {
    const location = useLocation();
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col bg-dark relative overflow-x-hidden">
            {/* Slow-shifting gradient mesh — CSS only */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-shift" aria-hidden />
            <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-dark/70 via-transparent to-dark/60" aria-hidden />
            <Analytics />
            <Nav />
            <div className="flex-1 relative z-10">
                <AnimatedRoutes />
            </div>
        </div>
    );
}

export default App;
