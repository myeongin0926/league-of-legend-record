import { ActionType } from "typesafe-actions";
import { ItemInfo } from "../../types/SummonerType";
import * as actions from "./actions";
import { AsyncState } from "../../lib/reducerUtils";

export type ItemDataAction = ActionType<typeof actions>;

export type ItemDataState = {
  data: AsyncState<ItemInfo[], Error>;
};
