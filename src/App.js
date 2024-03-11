import logo from './logo.svg';
import './App.css';
import { Hero } from './Components/Hero';
import { Mission } from './Components/Mission';
import { Working } from './Components/Working';
import { Department } from './Components/Department';
import { Footer } from './Components/Footer';
function App() {
  return (
    <>
    <Hero/>
    <Mission/>
    <Working/>
    <Department/>
    <Footer/>
    </>
  );
}

export default App;
