import { createReducer } from "typesafe-actions";
import { PerkDataAction, PerkDataState } from "./types";
import {
  GET_PERK_DATA,
  GET_PERK_DATA_SUCCESS,
  GET_PERK_DATA_ERROR,
} from "./actions";
import { asyncState } from "../../lib/reducerUtils";

const initialState: PerkDataState = {
  data: asyncState.initial(),
};

const perkData = createReducer<PerkDataState, PerkDataAction>(initialState, {
  [GET_PERK_DATA]: () => ({
    data: asyncState.load(),
  }),
  [GET_PERK_DATA_SUCCESS]: (_, action) => ({
    data: asyncState.success(action.payload),
  }),
  [GET_PERK_DATA_ERROR]: (_, action) => ({
    data: asyncState.error(action.payload),
  }),
});

export default perkData;
