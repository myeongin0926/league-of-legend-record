import { getSummonerItemData } from "../../api/summonerApis";
import { getItemDataAsync } from "./actions";
import createAsyncThunk from "../../lib/createAsyncThunk";

export const getSummonerItemThunk = createAsyncThunk(
  getItemDataAsync,
  getSummonerItemData,
);
