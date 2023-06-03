import './App.css';
import Services from './pages/Services';
import About from './pages/About';
import Categories from './pages/Categories';
import Courses from './pages/Courses';
import Team from './pages/Team';
import Testimonial from './pages/Testimoniall';
import Back from './pages/Back';
import Footer from './Footer';
import Spinnerr from './pages/Spinnerr';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Navs from './pages/Navs';
function App() {
  return (
    <div className="App">


<BrowserRouter>


      <Navs/>
      <Services/>
      <About/>
      <Categories/>
      <Courses/>
      <Team/>
      <Testimonial/>
      <Back/>
      <Spinnerr/>
      <Footer/>

<Routes> 
<Route path='/contact'   element={<  Contact/>}  />




</Routes>



</BrowserRouter>





    </div>
  );
}

export default App;
