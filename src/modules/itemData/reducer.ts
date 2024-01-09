import { createReducer } from "typesafe-actions";
import { ItemDataAction, ItemDataState } from "./types";
import {
  GET_ITEM_DATA,
  GET_ITEM_DATA_SUCCESS,
  GET_ITEM_DATA_ERROR,
} from "./actions";
import { asyncState } from "../../lib/reducerUtils";

const initialState: ItemDataState = {
  data: asyncState.initial(),
};

const itemData = createReducer<ItemDataState, ItemDataAction>(initialState, {
  [GET_ITEM_DATA]: () => ({
    data: asyncState.load(),
  }),
  [GET_ITEM_DATA_SUCCESS]: (_, action) => ({
    data: asyncState.success(action.payload),
  }),
  [GET_ITEM_DATA_ERROR]: (_, action) => ({
    data: asyncState.error(action.payload),
  }),
});

export default itemData;
