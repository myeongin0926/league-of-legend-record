import React from "react";
import { ItemInfo } from "../../types/SummonerType";

interface Props {
  itemNumber: number;
  itemData: ItemInfo[];
}

const SummonerItemIcon: React.FC<Props> = ({ itemNumber, itemData }) => {
  //   console.log(itemNumber);
  return <div />;
};

export default SummonerItemIcon;
