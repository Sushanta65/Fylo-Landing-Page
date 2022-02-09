/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
     <Navbar />
     <HeroSection/>
    </div>
  )
}
export default App;
