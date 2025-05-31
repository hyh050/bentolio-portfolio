import Header from './components/Header';
import Slogan from './components/Slogan';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Socials from './components/Socials';
import './styles/main.css';

function App() {
  return (
    <div className="main-bg">
      <Header />
      <Slogan />
      <div className="main-content">
        <About />
        <Work />
        <Contact />
        <Socials />
      </div>
    </div>
  );
}

export default App;
