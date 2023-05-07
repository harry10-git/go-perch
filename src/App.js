import './App.css';
import HomeCarousel from './components/HomeCarousel';
import Navbar from './components/Navbar';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomeCarousel/>
    <Services/>
    </div>
  );
}

export default App;
