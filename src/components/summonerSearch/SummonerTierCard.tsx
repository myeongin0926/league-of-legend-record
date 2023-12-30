import React from "react";
import { Box } from "@mui/material";
import { SummonerRankInfo } from "../../types/SummonerType";
import {
  getPublicUrl,
  getSummonerTierName,
  getCommaSeparatedNumber,
} from "../../utils/MessageFormat";
import { THEME_COLOR } from "../../theme";
import { calculateWinRate } from "../../\butils/Calculate";

interface Props {
  rankInfo: SummonerRankInfo | undefined;
  queueName: "자유 랭크" | "솔로 랭크";
}

const SummonerTierCard: React.FC<Props> = ({ rankInfo, queueName }) => {
  if (!rankInfo) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "400px",
          border: 1,
          borderColor: THEME_COLOR.grey300,
          height: "110px",
        }}
      >
        <Box
          sx={{
            bgcolor: THEME_COLOR.grey100,
            padding: "0px 20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            sx={{ width: "75px", objectFit: "contain" }}
            src={getPublicUrl("/images/tier/unRanked.png")}
            alt="SummonerUnRankedIcon"
          />
        </Box>
        <Box
          sx={{
            padding: "0px 15px",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0.8,
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "13px",
              color: THEME_COLOR.grey500,
              fontWeight: "bold",
            }}
          >
            {queueName}
          </Box>
          <Box
            component="span"
            sx={{
              color: THEME_COLOR.grey400,
              fontSize: "22px",
              fontFamilly: "TAEBAEKmilkyway",
              fontWeight: "600",
              letterSpacing: ".5px",
            }}
          >
            UnRanked
          </Box>
        </Box>
      </Box>
    );
  }

  const { tier, rank, losses, wins, leaguePoints } = rankInfo;
  const tierImageUrl = getPublicUrl(`/images/tier/${tier}.png`);
  const tierName = getSummonerTierName(tier, rank);
  const winLossRecord = `${wins}승 ${losses}패`;
  const winRate = calculateWinRate(wins, losses);

  return (
    <Box
      sx={{
        display: "flex",
        width: "400px",
        border: 1,
        borderColor: THEME_COLOR.grey300,
        height: "110px",
      }}
    >
      <Box
        sx={{
          bgcolor: THEME_COLOR.grey100,
          padding: "0px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          sx={{ width: "75px", objectFit: "contain" }}
          src={tierImageUrl}
          alt="SummonerTierIcon"
        />
      </Box>
      <Box
        sx={{
          padding: "0px 15px",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          gap: 0.8,
        }}
      >
        <Box
          component="span"
          sx={{
            fontSize: "13px",
            color: THEME_COLOR.grey500,
            fontWeight: "600",
          }}
        >
          {queueName}
        </Box>
        <Box component="p">
          <Box
            component="span"
            sx={{
              color: THEME_COLOR.TIER[tier],
              fontSize: "22px",
              fontFamilly: "TAEBAEKmilkyway",
              fontWeight: "600",
              letterSpacing: ".5px",
            }}
          >
            {tierName}
          </Box>
          <Box
            component="span"
            sx={{
              color: THEME_COLOR.grey600,
              fontWeight: "600",
              fontSize: "15px",
              pl: "10px",
            }}
          >
            {getCommaSeparatedNumber(leaguePoints)} LP
          </Box>
        </Box>
        <Box component="p">
          <Box
            component="span"
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              color: THEME_COLOR.grey700,
            }}
          >
            승률 {winRate}
          </Box>
          <Box
            component="span"
            sx={{ color: THEME_COLOR.grey500, fontSize: "14px", pl: "10px" }}
          >
            ({winLossRecord})
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SummonerTierCard;
