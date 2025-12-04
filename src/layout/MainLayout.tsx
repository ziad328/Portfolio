import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import FloatingLines from '../components/ui/FloatingLines';

function MainLayout() {

  return (
    <>
      {/* FloatingLines Background - Fixed on all pages */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}>
        <FloatingLines
          linesGradient={['#1E3A8A', '#5B21B6', '#7E22CE']}
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[4, 6, 4]}
          lineDistance={[8, 6, 8]}
          animationSpeed={0.8}
          interactive={true}
          bendRadius={5.0}
          bendStrength={-0.5}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="screen"
        />
      </div>

      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;