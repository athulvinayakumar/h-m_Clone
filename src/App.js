
import './App.css';
import Banner from './components/Banner';
import Banner1 from './components/Banner1';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Roll from './components/Roll';
import Slide from './components/Slide';
import Slider1 from './components/Slider1';
import Slider2 from './components/Slider2';
import Slider3 from './components/Slider3';

function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Banner/>
      <Roll/>
      <Slider1/>
      <Card/>
      <Slider2/>  
      <Banner1/>
      <Slider3/>
      <Footer />
    </div>

  );
}

export default App;
