import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import ComputerRoomModal from "./ComputerRoomModal";

type ExperienceProps = {
  scrollProgress: number; // 0 (top) to 1 (bottom)
};

function Experience({ scrollProgress }: ExperienceProps) {
  const { camera } = useThree();

  useEffect(() => {
    // Animate camera position and angle based on scrollProgress
    const radius = 2.5;
    const angle = Math.PI / 2 + scrollProgress * Math.PI; // from side to other side
    const y = 0.5 + scrollProgress * 1.5; // move up as you scroll

    camera.position.x = radius * Math.cos(angle);
    camera.position.y = y;
    camera.position.z = radius * Math.sin(angle);
    camera.lookAt(0, 0.5, 0); // adjust target as needed
    camera.updateProjectionMatrix();
  }, [scrollProgress, camera]);

  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 1, 0]} intensity={1} />

      <ComputerRoomModal />
    </>
  );
}

export default Experience;
