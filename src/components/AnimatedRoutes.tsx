import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Profile from './views/profile';
import Experience from './views/experience';
import Projects from './views/projects';

export const AnimatedRoutes = () => {
  const location = useLocation();

  const pageTransition = {
    duration: 0.5,
    ease: "easeInOut"
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: -50
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: 50
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="w-full flex-grow"
              >
                <Profile />
              </motion.div>
            }
          />
          <Route
            path="/experience"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="w-full flex-grow"
              >
                <Experience />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="w-full flex-grow"
              >
                <Projects />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}; 