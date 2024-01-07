import React from "react";
import { Box } from "@mui/material";
import { PerkInfo, SummonerRuneData, Style } from "../../types/SummonerType";
import SUMMONER from "../../constants/Summoner";
import CustomTooltip, { TooltipComponent } from "../CustomTooltip";

interface Props {
  perkData: PerkInfo[];
  summonerPerkData: SummonerRuneData;
  type: "primary" | "sub";
}

const SummonerPerkIcon: React.FC<Props> = ({
  perkData,
  summonerPerkData,
  type,
}) => {
  const currentStyle = summonerPerkData.styles.find(
    (rune) => rune.description === `${type}Style`,
  ) as Style;

  let currentPerkData;
  const mainRune = perkData.find((perk) => perk.id === currentStyle.style);

  if (currentStyle.description === SUMMONER.SUMMONER_RUNE.PRIMARY_STYLE) {
    const subRuneNumber = currentStyle.selections[0].perk;
    const flatSubRune = mainRune?.slots.flatMap((item) => item.runes);
    const subRune = flatSubRune?.find((rune) => rune.id === subRuneNumber);
    currentPerkData = subRune;
  } else if (currentStyle.description === SUMMONER.SUMMONER_RUNE.SUB_STYLE) {
    currentPerkData = mainRune;
  }

  console.log(currentPerkData);
  return type === SUMMONER.SUMMONER_RUNE.PRIMARY ? (
    <CustomTooltip title={<TooltipComponent title="hello" body="good" />}>
      <Box>메인 룬</Box>
    </CustomTooltip>
  ) : (
    <Box>서브 룬</Box>
  );
};

export default SummonerPerkIcon;
