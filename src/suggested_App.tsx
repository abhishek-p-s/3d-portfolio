import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { useRef, useState, useCallback } from "react";

function App() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const el = overlayRef.current;
    if (el) {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setScrollProgress(progress);
    }
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0.5, 1], fov: 90 }}>
          <Experience scrollProgress={scrollProgress} />
        </Canvas>
      </div>
      {/* Scrollable Overlay Content */}
      <div
        ref={overlayRef}
        onScroll={handleScroll}
        className="relative w-screen h-screen z-10 overflow-y-auto pointer-events-auto bg-transparent"
      >
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-slate-100 text-center select-none">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg mb-2 animate-fade-in">
            abhishek ps
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold drop-shadow-md mb-6 animate-fade-in delay-200">
            software engineer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mb-4 animate-fade-in delay-400"></div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-blue-900/60 text-slate-200 text-center px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg animate-fade-in">
            About Me
          </h2>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed drop-shadow-md animate-fade-in delay-200">
            I am a senior software engineer with a deep-rooted passion for
            crafting robust and scalable applications that push the boundaries
            of technology. With extensive experience in full-stack development,
            I thrive on architecting innovative solutions that blend
            cutting-edge front-end technologies with powerful back-end
            frameworks. At the heart of my expertise lies a mastery of a diverse
            array of technologies, including React, Node.js, MongoDB, Express,
            TypeScript, React Native, and JavaScript. These tools serve as my
            arsenal in creating dynamic and user-centric applications that
            resonate with modern digital landscapes. I am a firm believer in the
            power of collaboration and thrive in team environments where ideas
            flow freely and innovation flourishes. My effective communication
            skills and natural leadership abilities enable me to inspire and
            mentor fellow team members, driving collective success and fostering
            a culture of continuous improvement.
          </p>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-purple-900/60 text-slate-200 text-center px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-lg animate-fade-in">
            Projects
          </h2>
          <ul className="space-y-8 max-w-2xl w-full animate-fade-in delay-200">
            <li className="bg-slate-800/60 rounded-xl p-6 shadow-lg hover:bg-blue-800/70 transition">
              <strong className="block text-xl font-semibold mb-2 text-blue-300">
                3D Portfolio Website
              </strong>
              <p>
                An interactive portfolio with a 3D background, built using React
                and Three.js.
              </p>
            </li>
            <li className="bg-slate-800/60 rounded-xl p-6 shadow-lg hover:bg-purple-800/70 transition">
              <strong className="block text-xl font-semibold mb-2 text-purple-300">
                Real-time Chat App
              </strong>
              <p>
                A full-stack chat application with live messaging and
                notifications.
              </p>
            </li>
            {/* Add more projects as needed */}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
