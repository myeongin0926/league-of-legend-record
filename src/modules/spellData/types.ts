import { ActionType } from "typesafe-actions";
import { SummonerSpellInfo } from "../../types/SummonerType";
import * as actions from "./actions";
import { AsyncState } from "../../lib/reducerUtils";

export type SpellDataAction = ActionType<typeof actions>;

export type SpellDataState = {
  data: AsyncState<SummonerSpellInfo[], Error>;
};
