import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { useRef, useState, useCallback } from "react";
import Footer from "./components/Footer";

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

  // Scroll to About section smoothly
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection && overlayRef.current) {
      overlayRef.current.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900" />
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1], fov: 70 }}>
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
        <section className="min-h-screen flex flex-col items-center justify-center text-indigo-200 text-center select-none [text-shadow:0_2px_8px_#000] relative">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2 m-0">
            Abhishek p s
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold m-0">
            Software Engineer
          </h2>
          {/* Scroll Down Icon */}
          <button
            onClick={handleScrollDown}
            aria-label="Scroll down"
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center group focus:outline-none"
            tabIndex={0}
          >
            <span className="animate-bounce">
              {/* Heroicons Chevron Double Down SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-indigo-300 group-hover:text-indigo-400 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 13l-7 7-7-7M19 5l-7 7-7-7"
                />
              </svg>
            </span>
            <span className="mt-2 text-sm text-indigo-300 group-hover:text-indigo-400 transition">
              Scroll Down
            </span>
          </button>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center bg-black/30 text-indigo-200 text-center px-4 py-12 [text-shadow:0_2px_8px_#000]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="max-w-4xl text-lg md:text-xl leading-relaxed mx-auto">
            I am a senior software engineer with a deep-rooted passion for
            crafting robust and scalable applications that push the boundaries
            of technology. With extensive experience in full-stack development,
            I thrive on architecting innovative solutions that blend
            cutting-edge front-end technologies with powerful back-end
            frameworks. currently working with{" "}
            <a href="https://six30labs.io/" className="text-indigo-400">
              six30labs
            </a>
          </p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex flex-col items-center justify-center bg-black/30 text-indigo-200 text-center px-4 py-12 [text-shadow:0_2px_8px_#000]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
          {/* <ul className="space-y-8 max-w-xl w-full mx-auto list-none p-0">
            <li className="mb-6">
              <strong className="block text-xl font-semibold mb-2">
                3D Portfolio Website
              </strong>
              <p>
                An interactive portfolio with a 3D background, built using React
                and Three.js.
              </p>
            </li>
            <li className="mb-6">
              <strong className="block text-xl font-semibold mb-2">
                Real-time Chat App
              </strong>
              <p>
                A full-stack chat application with live messaging and
                notifications.
              </p>
            </li>
          </ul> */}
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
