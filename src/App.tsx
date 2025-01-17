import { AnimatedRoutes } from './components/AnimatedRoutes';
import { Nav } from './components/app/Nav';
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-dark">
            <Analytics />
            <Nav />
            <div className="flex-1">
                <AnimatedRoutes />
            </div>
        </div>
    );
}

export default App;
