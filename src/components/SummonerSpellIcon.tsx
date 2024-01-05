import React from "react";
import { Box } from "@mui/material";
import { SummonerSpellInfo } from "../types/SummonerType";
import { getSpellIconUrl } from "../\butils/MessageFormat";

interface Props {
  spellNumber: number;
  spellData: SummonerSpellInfo[];
  radius?: string;
  size?: string;
}

const SummonerSpellIcon: React.FC<Props> = ({
  spellNumber,
  spellData,
  size,
  radius,
}) => {
  const currentSpellData = spellData.find(
    (spellInfo: SummonerSpellInfo) => spellInfo.key === String(spellNumber),
  );
  const { id } = currentSpellData as SummonerSpellInfo;
  const spellIconUrl = getSpellIconUrl(id);
  return (
    <Box
      component="img"
      src={spellIconUrl}
      alt="summonerSpellIcon"
      sx={{
        width: size,
        height: size,
        borderRadius: radius,
      }}
    />
  );
};

SummonerSpellIcon.defaultProps = {
  size: "25px",
  radius: "0px",
};
export default SummonerSpellIcon;
