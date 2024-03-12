import { Outlet } from 'react-router-dom';
import GlobalNavigator from '/src/components/organisms/GlobalNavigator/GlobalNavigator';
import { motion } from 'framer-motion';

function App() {
  const formVar = {
    start: { x: '100%' },
    end: {
      x: 0,
      transition: { type: 'spring', stiffness: 100, mass: 0.4 },
    },
  };

  return (
    <>
      <motion.div
        variants={formVar}
        initial="start"
        animate="end"
        className="m-auto max-w-md min-w-80 h-screen bg-background-gray"
      >
        <Outlet />
        <GlobalNavigator />
      </motion.div>
    </>
  );
}

export default App;
