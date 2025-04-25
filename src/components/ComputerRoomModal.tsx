import { useGLTF } from "@react-three/drei";

function ComputerRoomModal() {
  const { scene } = useGLTF("./computer__desk.glb");
  return <primitive object={scene} />;
}

export default ComputerRoomModal;
