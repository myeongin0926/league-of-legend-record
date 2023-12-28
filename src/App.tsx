import { Routes, Route } from "react-router";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SummonerSearchPage from "./pages/SummonerSearchPage";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/summoner/:summonerName"
          element={<SummonerSearchPage />}
        />
      </Routes>
    </>
  );
}

export default App;
