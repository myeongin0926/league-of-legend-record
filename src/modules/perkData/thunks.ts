import { getSummonerPerkData } from "../../api/summonerApis";
import { getPerkDataAsync } from "./actions";
import createAsyncThunk from "../../lib/createAsyncThunk";

export const getSummonerPerkThunk = createAsyncThunk(
  getPerkDataAsync,
  getSummonerPerkData,
);
