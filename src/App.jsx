import "./App.css";
import Discover from "./components/discover";
import Navbar from "./components/navbar";
import ChartArtist from "./components/chart+artist";




function App() {
  return (
  
    <div className="container">
      <Navbar />
      <Discover />
      <ChartArtist />
    </div>
  
  
  );
}

export default App;
