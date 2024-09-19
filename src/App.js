import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Giver from './components/Giver';
import Services from './components/Services';
import Find from './components/Find';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Giver />
      <Services />
      <Find />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

