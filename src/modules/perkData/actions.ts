import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { PerkInfo } from "../../types/SummonerType";

export const GET_PERK_DATA = "perkData/GET_PERK_DATA";
export const GET_PERK_DATA_SUCCESS = "perkData/GET_PERK_DATA_SUCCESS";
export const GET_PERK_DATA_ERROR = "perkData/GET_PERK_DATA_ERRORs";

export const getPerkDataAsync = createAsyncAction(
  GET_PERK_DATA,
  GET_PERK_DATA_SUCCESS,
  GET_PERK_DATA_ERROR,
)<null, PerkInfo[], AxiosError>();
