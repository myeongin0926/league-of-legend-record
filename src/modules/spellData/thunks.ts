import { getSummonerSpellData } from "../../api/summonerApis";
import { getSpellDataAsync } from "./actions";
import createAsyncThunk from "../../lib/createAsyncThunk";

export const getSummonerSpellThunk = createAsyncThunk(
  getSpellDataAsync,
  getSummonerSpellData,
);
