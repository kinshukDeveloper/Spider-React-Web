import './assets/index.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <hr className="m-0" />
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;
