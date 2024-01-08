import React from "react";
import { Box } from "@mui/material";
import {
  PerkInfo,
  SummonerRuneData,
  Style,
  Perk,
} from "../../types/SummonerType";
import SUMMONER from "../../constants/Summoner";
import CustomTooltip, { TooltipComponent } from "../CustomTooltip";
import { getRuneIconUrl } from "../../\butils/MessageFormat";

interface Props {
  perkData: PerkInfo[];
  summonerPerkData: SummonerRuneData;
  type: "primary" | "sub";
  size?: string;
}

const SummonerRuneIcon: React.FC<Props> = ({
  perkData,
  summonerPerkData,
  type,
  size,
}) => {
  const currentStyle = summonerPerkData.styles.find(
    (rune) => rune.description === `${type}Style`,
  ) as Style;

  let currentPerkData: Perk | undefined;
  const mainRune = perkData.find((perk) => perk.id === currentStyle.style);
  if (currentStyle.description === SUMMONER.SUMMONER_RUNE.PRIMARY_STYLE) {
    const subRuneNumber = currentStyle.selections[0].perk;
    const flatSubRune = mainRune?.slots.flatMap((item) => item.runes);
    currentPerkData = flatSubRune?.find((rune) => rune.id === subRuneNumber);
  } else if (currentStyle.description === SUMMONER.SUMMONER_RUNE.SUB_STYLE) {
    currentPerkData = mainRune;
  }
  if (!currentPerkData) return null;

  const runeIconUrl = getRuneIconUrl(currentPerkData.icon);

  const runeComponent =
    type === SUMMONER.SUMMONER_RUNE.PRIMARY ? (
      <CustomTooltip
        sx={{ position: "absolute" }}
        title={
          <TooltipComponent
            title={currentPerkData.name}
            body={currentPerkData.shortDesc}
          />
        }
      >
        <Box
          component="img"
          sx={{
            background: "black",
            borderRadius: "50%",
            width: size,
            height: size,
          }}
          src={runeIconUrl}
        />
      </CustomTooltip>
    ) : (
      <Box
        component="img"
        src={runeIconUrl}
        sx={{
          width: size,
          height: size,
        }}
      />
    );

  return runeComponent;
};

SummonerRuneIcon.defaultProps = {
  size: "25px",
};
export default SummonerRuneIcon;
