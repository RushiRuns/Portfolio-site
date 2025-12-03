import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Aboutme from './components/about-me';
import Education from './components/education';
import Projects from './components/projects';
import Contacts from './components/contacts';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-48 pb-20">
        <Hero />
        <Aboutme />
        <Education />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
