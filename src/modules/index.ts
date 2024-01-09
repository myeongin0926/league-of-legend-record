import { combineReducers } from "redux";
import { perkData } from "./perkData";
import { spellData } from "./spellData";
import { itemData } from "./itemData";

const rootReducer = combineReducers({
  perkData,
  spellData,
  itemData,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
