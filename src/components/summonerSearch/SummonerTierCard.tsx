import React from "react";
import { Box } from "@mui/material";
import { SummonerRankInfo } from "../../types/SummonerType";
import {
  PUBLIC_IMAGE_URL,
  SUMMONER_TIER_NAME,
} from "../../constants/MessageFormat";
import { THEME_COLOR } from "../../theme";
import SUMMONER from "../../constants/Summoner";

interface Props {
  rankInfo: SummonerRankInfo | "UnRanked";
}

const SummonerTierCard: React.FC<Props> = ({ rankInfo }) => {
  if (rankInfo === "UnRanked") {
    return <div />;
  }
  const { tier, rank, queueType, leaguePoints } = rankInfo;

  const tierImageUrl = PUBLIC_IMAGE_URL(`/images/tier/${tier}.png`);
  const tierName = SUMMONER_TIER_NAME(tier, rank);
  return (
    <Box
      sx={{
        display: "flex",
        width: "400px",
        border: 1,
        borderColor: THEME_COLOR.grey_300,
        height: "110px",
      }}
    >
      <Box
        sx={{
          bgcolor: THEME_COLOR.grey_100,
          padding: "0px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          sx={{ width: "60px", objectFit: "contain" }}
          src={tierImageUrl}
          alt="SummonerTierIcon"
        />
      </Box>
      <Box
        sx={{
          padding: "0px 15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box component="span">{SUMMONER.SUMMONER_QUEUE_TYPE[queueType]}</Box>
        <Box component="p">
          <Box component="span">{tierName}</Box>
          <Box component="span"> {leaguePoints} LP</Box>
        </Box>
        <Box component="p">
          <Box component="span">승패</Box>
          <Box component="span"> 승률</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SummonerTierCard;
