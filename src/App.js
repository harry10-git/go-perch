import './App.css';
import HomeCarousel from './components/HomeCarousel';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Levelup from './components/pages/Levelup';






function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomeCarousel/>
    <Services/>
    {/* <Levelup/> */}


    
    </div>
  );
}

export default App;
