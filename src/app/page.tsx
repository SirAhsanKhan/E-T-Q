import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSection from './components/Mainsection';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
