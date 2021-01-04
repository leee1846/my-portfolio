import "./App.css";
import CartoonIntro from "./pages/CartoonIntro";
import CoverLetter from "./pages/CoverLetter";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className='total-container'>
      <CartoonIntro />
      <CoverLetter />
      <Projects />
    </div>
  );
}

export default App;
