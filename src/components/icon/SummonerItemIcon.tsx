import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { RootState } from "../../modules";
import CustomTooltip, { TooltipComponent } from "../CustomTooltip";
import { getItemIconUrl } from "../../\butils/MessageFormat";
import { THEME_COLOR } from "../../theme";

interface Props {
  itemNumber: number;
  size?: string;
}

const SummonerItemIcon: React.FC<Props> = ({ itemNumber, size }) => {
  const {
    data: { data: itemData },
  } = useSelector((state: RootState) => state.itemData);
  if (!itemData) return null;
  const currentItemData = itemData[itemNumber];
  const itemIconUrl = getItemIconUrl(itemNumber);

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "5px",
        overflow: "hidden",
        backgroundColor: THEME_COLOR.lightGrey,
      }}
    >
      {currentItemData && (
        <CustomTooltip
          title={
            <TooltipComponent
              title={currentItemData.name}
              body={currentItemData.description}
            />
          }
        >
          <Box component="img" src={itemIconUrl} sx={{ width: size }} />
        </CustomTooltip>
      )}
    </Box>
  );
};

SummonerItemIcon.defaultProps = {
  size: "30px",
};

export default SummonerItemIcon;
