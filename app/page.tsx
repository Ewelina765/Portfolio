import Home from './features/home/Home';
import Skills from './features/skills/Skills';
import About from './features/about/About';
import Contact from './features/contact/Contact';
import '../styles/globals.scss';

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
