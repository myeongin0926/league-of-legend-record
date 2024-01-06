import React from "react";
import { Box } from "@mui/material";
import { SummonerSpellInfo } from "../../types/SummonerType";
import { getSpellIconUrl } from "../../utils/MessageFormat";
import CustomTooltip, { TooltipComponent } from "../CustomTooltip";

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
  const { id, name, description } = currentSpellData as SummonerSpellInfo;
  const spellIconUrl = getSpellIconUrl(id);
  return (
    <CustomTooltip title={<TooltipComponent title={name} body={description} />}>
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
    </CustomTooltip>
  );
};

SummonerSpellIcon.defaultProps = {
  size: "25px",
  radius: "5px",
};
export default SummonerSpellIcon;
