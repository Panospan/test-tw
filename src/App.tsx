import "./App.css";
import Contact from "./components/Contact";
import HeroBanner from "./components/HeroBanner";
import MainLayout from "./components/MainLayout";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="flex flex-col justify-start w-full min-h-screen">
      <HeroBanner />
      <Technologies />
      <Projects />
      <Contact />
      <MainLayout> </MainLayout>
    </div>
  );
}

export default App;
