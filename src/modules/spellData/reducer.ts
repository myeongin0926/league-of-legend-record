import { createReducer } from "typesafe-actions";
import { SpellDataAction, SpellDataState } from "./types";
import {
  GET_SPELL_DATA,
  GET_SPELL_DATA_SUCCESS,
  GET_SPELL_DATA_ERROR,
} from "./actions";
import { asyncState } from "../../lib/reducerUtils";

const initialState: SpellDataState = {
  data: asyncState.initial(),
};

const spellData = createReducer<SpellDataState, SpellDataAction>(initialState, {
  [GET_SPELL_DATA]: () => ({
    data: asyncState.load(),
  }),
  [GET_SPELL_DATA_SUCCESS]: (_, action) => ({
    data: asyncState.success(action.payload),
  }),
  [GET_SPELL_DATA_ERROR]: (_, action) => ({
    data: asyncState.error(action.payload),
  }),
});

export default spellData;
