import { Routes, Route } from "react-router";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SummonerSearchPage from "./pages/SummonerSearchPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/summoner/:summonerName"
          element={<SummonerSearchPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
