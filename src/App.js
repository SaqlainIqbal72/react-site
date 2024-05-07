import Header from "./Components/Homepage/Header/Header";
import Main from "./Components/Homepage/Main/Main";
import Card from "./Components/Homepage/Card/Card";
import About from "./Components/Homepage/about/About";
import Team from "./Components/Homepage/Team/Team";
import Testimonial from "./Components/Homepage/Testimonials/Testimonial";
import Contact from "./Components/Homepage/Contact/Contact";
import Footer from "./Components/Homepage/Footer/Footer";
function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <Card/>
     <About/>
     <Team/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
