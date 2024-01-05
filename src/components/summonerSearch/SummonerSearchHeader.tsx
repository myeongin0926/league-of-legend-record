import React from "react";
import { Box } from "@mui/material";
import { SummonerInfo } from "../../types/SummonerType";
import { getProfileIconUrl, getPublicUrl } from "../../utils/MessageFormat";

import { THEME_COLOR } from "../../theme";

interface Props {
  summonerInfo: SummonerInfo;
}

const SummonerSearchHeader: React.FC<Props> = ({ summonerInfo }) => {
  const { summonerName, summonerTag, profileIconId, summonerLevel, name, id } =
    summonerInfo;
  const profileIconUrl = getProfileIconUrl(profileIconId);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          background: `url(${getPublicUrl(
            "/images/summonerSearchHeaderBackground.avif",
          )}) no-repeat center/cover`,
          p: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            component="img"
            sx={{
              width: "100px",
              objectFit: "contain",
              borderRadius: "50%",
            }}
            src={profileIconUrl}
            alt="summonerProfileIcon"
          />
          <Box
            component="div"
            sx={{
              margin: "0 auto",
              background: "black",
              padding: "3px 7px",
              marginTop: "-15px",
              borderRadius: "10px",
              color: THEME_COLOR.grey400,
              fontWeight: "bold",
              fontSize: "13px",
            }}
          >
            {summonerLevel}
          </Box>
        </Box>

        <Box
          sx={{
            fontSize: "20px",
            color: "white",
            pl: "20px",
            pt: "10px",
            fontWeight: "bold",
          }}
        >
          <Box
            component="p"
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <Box component="span">{summonerName}</Box>
            <Box
              component="span"
              sx={{ pl: "5px", color: THEME_COLOR.grey500 }}
            >
              #{summonerTag}
            </Box>
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: "12px",
              color: THEME_COLOR.grey600,
              fontWeight: "600",
              pt: "5px",
            }}
          >
            prev. {name}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SummonerSearchHeader;
