import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import OurTeam from './components/OurTeam';
import ContactUs from './components/ContactUs';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {

  // const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light');
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });


  const dotRef = useRef(false);
  const outlineRef = useRef(false);

  // ref for custom cursor position tracking
  const position = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px , ${mouse.current.y - 6}px , 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px , ${position.current.y - 20}px , 0)`
      }
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  return (
    <>
      <div className='bg-bg-light relative dark:bg-bg-dark min-h-screen text-dark-text dark:text-light-text transition-colors duration-500 ease-in-out'>
        <Toaster />
        <Navbar theme={theme} setTheme={setTheme} />
        <main className=' mx-auto overflow-hidden'>

          <Hero />
          <TrustedBy />
          <Services />
          <OurWork />
          <OurTeam />
          <ContactUs />
          <Footer theme={theme} />

          {/* custom cursor ring */}
          <div ref={outlineRef} className='fixed hidden lg:inline-block top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-50' style={{transition:'transform 0.1s ease-out'}}></div>
          {/* custom cursor dot */}
          <div ref={dotRef} className='fixed hidden lg:inline-block top-0 left-0 h-3 w-3 z-50 rounded-full bg-primary pointer-events-none'></div>
        </main>
      </div>
    </>
  )
}

export default App
