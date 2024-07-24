import './App.css';
import Hero from './components/Hero';
import Slide from './components/Slide';
import GetStarted from './components/GetStarted';
import { slidesData } from './data';

function App() {
  return (
    <div className="App">
      <Hero />
      {
        slidesData.map(slide => <Slide key={slide.title} slide={slide}/>)
      }
      <GetStarted />
    </div>
  );
}
export default App;