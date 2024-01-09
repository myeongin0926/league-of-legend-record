import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { SummonerSpellInfo } from "../../types/SummonerType";

export const GET_SPELL_DATA = "spellData/GET_SPELL_DATA";
export const GET_SPELL_DATA_SUCCESS = "spellData/GET_SPELL_DATA_SUCCESS";
export const GET_SPELL_DATA_ERROR = "spellData/GET_SPELL_DATA_ERRORs";

export const getSpellDataAsync = createAsyncAction(
  GET_SPELL_DATA,
  GET_SPELL_DATA_SUCCESS,
  GET_SPELL_DATA_ERROR,
)<null, SummonerSpellInfo[], AxiosError>();
