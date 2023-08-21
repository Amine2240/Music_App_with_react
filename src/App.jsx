import "./App.css";
import Discover from "./components/discover";
import Navbar from "./components/navbar";
import ChartArtist from "./components/chart+artist";
import { QueryClient , QueryClientProvider } from "react-query";
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="container">
      <Navbar />
      <Discover />
      <ChartArtist />
    </div>
    </QueryClientProvider>
  );
}

export default App;
