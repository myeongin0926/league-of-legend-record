import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { ItemInfo } from "../../types/SummonerType";

export const GET_ITEM_DATA = "itemData/GET_SPELL_DATA";
export const GET_ITEM_DATA_SUCCESS = "itemData/GET_SPELL_DATA_SUCCESS";
export const GET_ITEM_DATA_ERROR = "itemData/GET_SPELL_DATA_ERRORs";

export const getItemDataAsync = createAsyncAction(
  GET_ITEM_DATA,
  GET_ITEM_DATA_SUCCESS,
  GET_ITEM_DATA_ERROR,
)<null, ItemInfo[], AxiosError>();
