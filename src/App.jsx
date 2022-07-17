import './Assets/CSS/App.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Projects from './Pages/Projects.jsx';
import Testimonials from './Pages/Testimonials.jsx';

export const App = () => {
  return (
    <>
      <Home />
      <Projects />
      <About />
      <Testimonials />
    </>
  );
};
