import { AnimatedRoutes } from './components/AnimatedRoutes';
import { Nav } from './components/app/Nav';
import BackgroundEffect from './components/app/BackgroundEffect';
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <>
            <Analytics />
            <BackgroundEffect />
            <Nav />
            <AnimatedRoutes />
        </>
    );
}

export default App;
