import React from "react";
import { Box } from "@mui/material";
import { SummonerMatchData, SummonerInfo } from "../../types/SummonerType";
import { THEME_COLOR } from "../../theme";
import MATCH from "../../constants/Match";
import { calculateTimeElapsed } from "../../\butils/Calculate";

interface Props {
  matchData: SummonerMatchData;
  summonerInfo: SummonerInfo;
}

const SummonerMatchCard: React.FC<Props> = ({ matchData, summonerInfo }) => {
  const [currentSummonerMatchData] = matchData.info.participants.filter(
    (summoner) => summoner.puuid === summonerInfo.puuid,
  );

  console.log(currentSummonerMatchData, matchData);

  const { win } = currentSummonerMatchData;
  const { queueId, gameEndTimestamp } = matchData.info;
  const backColor = win ? THEME_COLOR.lightBlue100 : THEME_COLOR.red100;
  const winColor = win ? THEME_COLOR.lightBlue600 : THEME_COLOR.red600;
  const gameResult = win ? MATCH.RESULT.win : MATCH.RESULT.lose;
  const gameType = MATCH.GAME_TYPE[queueId];

  const gameEndDate = 1704242925978; // 게임 종료 날짜 (epoch time)
  const timeElapsed = calculateTimeElapsed(gameEndDate);
  console.log(timeElapsed);

  console.log(gameType, new Date(gameEndTimestamp));
  return (
    <Box
      component="li"
      sx={{
        backgroundColor: backColor,
        height: "100px",
        borderRadius: "3px",
        padding: "10px 20px",
        borderLeft: `7px solid ${winColor}`,
      }}
    >
      <Box>
        <Box>{gameResult}</Box>
        <Box>{gameType}</Box>
        <Box>{calculateTimeElapsed(gameEndTimestamp)}</Box>
      </Box>
    </Box>
  );
};

export default SummonerMatchCard;
