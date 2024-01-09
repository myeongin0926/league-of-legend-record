import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { SummonerSpellInfo } from "../../types/SummonerType";
import { getSpellIconUrl } from "../../utils/MessageFormat";
import CustomTooltip, { TooltipComponent } from "../CustomTooltip";
import { RootState } from "../../modules";

interface Props {
  spellNumber: number;
  radius?: string;
  size?: string;
}

const SummonerSpellIcon: React.FC<Props> = ({ spellNumber, size, radius }) => {
  const {
    data: { data: spellData },
  } = useSelector((state: RootState) => state.spellData);

  if (!spellData) return null;

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
