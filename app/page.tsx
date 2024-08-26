import Home from './features/home/Home';
import Skills from './features/skills/Skills';
import About from './features/about/About';
import '../styles/globals.scss';
import Contact from './features/contact/Contact';

export default function Page() {
  return (
    <div className="main">
      <Home />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
