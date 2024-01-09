import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { PerkInfo } from "../../types/SummonerType";
import { AsyncState } from "../../lib/reducerUtils";

export type PerkDataAction = ActionType<typeof actions>;

export type PerkDataState = {
  data: AsyncState<PerkInfo[], Error>;
};
