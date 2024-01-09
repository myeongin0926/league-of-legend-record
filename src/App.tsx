import { Routes, Route } from "react-router";
import { Reset } from "styled-reset";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SummonerSearchPage from "./pages/SummonerSearchPage";
import { getSummonerPerkThunk } from "./modules/perkData";
import { getSummonerSpellThunk } from "./modules/spellData";
import { getSummonerItemThunk } from "./modules/itemData";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncActions = [
      getSummonerPerkThunk(),
      getSummonerSpellThunk(),
      getSummonerItemThunk(),
    ];

    asyncActions.forEach((action) => {
      action(dispatch);
    });
  }, []);

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
