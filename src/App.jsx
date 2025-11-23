import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aboutme from "./components/about-me";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Aboutme />
        <Education />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
