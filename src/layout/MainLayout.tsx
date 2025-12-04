import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import LightRays from '../components/ui/LightRays';
import ClickSpark from '../components/ui/ClickSpark';

function MainLayout() {
  return (
    <ClickSpark
      sparkColor='#ffffff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {/* Light Rays Background - Fixed on all pages */}
      <div className="fixed inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFFFFF"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <Navbar />

      <Outlet />
    </ClickSpark>
  );
}

export default MainLayout;