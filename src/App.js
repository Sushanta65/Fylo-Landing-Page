/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Footer from "./components/Footer/Footer";
import GetAccessSection from "./components/GetAccessSection/GetAccessSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from './components/Navbar/Navbar';
import WhereYouAreSection from "./components/WhereYouAreSection/WhereYouAreSection";
function App() {
  return (
    <div className="App">
     <Navbar />
     <HeroSection/>
     <WhereYouAreSection/>
     <GetAccessSection/>
     <Footer/>
    </div>
  )
}
export default App;
