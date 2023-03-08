import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import {Link} from "react-router-dom";

function App() {
  return (
    <>
    <Nav/>
    <div className='bgImg'>
       <div className='content-wrapper'>
           <h2 className='home-page-title'>You got the travel plans, we got the travel vans.</h2>
           <p className='home-page-text'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        
          
          <Link>Find Your Van</Link>
          
       </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
