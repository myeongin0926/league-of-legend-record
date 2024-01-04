import React from "react";
import { Box } from "@mui/material";
import { getChampionIconUrl } from "../\butils/MessageFormat";
import { THEME_COLOR } from "../theme";

interface Props {
  championName: string;
  size?: number;
  radius?: string;
  championLevel?: number;
}

const ChampionIcon: React.FC<Props> = ({
  championName,
  size,
  radius,
  championLevel,
}) => {
  const championIconUrl = getChampionIconUrl(championName);
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: radius,
          width: size,
          height: size,
        }}
      >
        <Box
          component="img"
          src={championIconUrl}
          sx={{
            width: "100%",
            transform: "scale(1.15)",
          }}
        />
      </Box>
      {championLevel && (
        <Box
          sx={{
            backgroundColor: THEME_COLOR.grey900,
            color: THEME_COLOR.grey100,
            position: "absolute",
            padding: "5px 4px 2px 4px",
            borderRadius: "50%",
            fontSize: "12px",
            right: 0,
            bottom: "0px",
            fontWeight: "bold",
          }}
        >
          {championLevel}
        </Box>
      )}
    </Box>
  );
};

ChampionIcon.defaultProps = {
  size: 30,
  radius: "5px",
  championLevel: undefined,
};

export default ChampionIcon;
