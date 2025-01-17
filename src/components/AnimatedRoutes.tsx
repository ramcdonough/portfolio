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
    <div style={{ position: 'relative', minHeight: '100vh' }}>
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
                style={{
                  position: 'absolute',
                  width: '100%',
                  left: 0,
                  right: 0
                }}
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
                style={{
                  position: 'absolute',
                  width: '100%',
                  left: 0,
                  right: 0
                }}
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
                style={{
                  position: 'absolute',
                  width: '100%',
                  left: 0,
                  right: 0
                }}
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