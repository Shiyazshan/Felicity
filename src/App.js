
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Spotlight from './components/screens/Spotlight';
import Features from './components/screens/Features';
import Contact from './components/screens/Contact';
import Testimonial from './components/screens/Testimonial';
import About from './components/screens/About';


function App() {
  return (
    <>
      <Spotlight />
      <Features />
      <About />
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;
