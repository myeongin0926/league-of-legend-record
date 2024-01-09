import React from "react";
import { Box } from "@mui/material";
import {
  SummonerMatchData,
  SummonerInfo,
  SummonerSpellInfo,
  PerkInfo,
} from "../../types/SummonerType";
import { THEME_COLOR } from "../../theme";
import MATCH from "../../constants/Match";
import {
  calculateTimeElapsed,
  calculateGameDuration,
  calculateGrade,
} from "../../\butils/Calculate";
import ChampionIcon from "../icon/ChampionIcon";
import SummonerSpellIcon from "../icon/SummonerSpellIcon";
import SummonerRuneIcon from "../icon/SummonerPerkIcon";
import SummonerItemIcon from "../icon/SummonerItemIcon";

interface Props {
  matchData: SummonerMatchData;
  summonerInfo: SummonerInfo;
}

const SummonerMatchCard: React.FC<Props> = ({ matchData, summonerInfo }) => {
  const [currentSummonerMatchData] = matchData.info.participants.filter(
    (summoner) => summoner.puuid === summonerInfo.puuid,
  );
  console.log(currentSummonerMatchData, matchData);
  const {
    win,
    championName,
    champLevel,
    summoner1Id,
    summoner2Id,
    perks,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    kills,
    deaths,
    assists,
  } = currentSummonerMatchData;
  const { queueId, gameEndTimestamp, gameDuration } = matchData.info;
  const backColor = win ? THEME_COLOR.lightBlue100 : THEME_COLOR.red100;
  const winColor = win ? THEME_COLOR.lightBlue600 : THEME_COLOR.red600;
  const gameResult = win ? MATCH.RESULT.win : MATCH.RESULT.lose;
  const gameType = MATCH.GAME_TYPE[queueId];
  const timeElapsed = calculateTimeElapsed(gameEndTimestamp);
  const timeDuration = calculateGameDuration(gameDuration);
  const summonerGrade = calculateGrade(kills, deaths, assists);
  return (
    <Box
      component="li"
      sx={{
        backgroundColor: backColor,
        height: "90px",
        borderRadius: "3px",
        padding: "12px 13px 10px 13px",
        border: 1,
        borderColor: THEME_COLOR.grey300,
        borderLeft: `4px solid ${winColor}`,
        overflow: "hidden",
        mb: "10px",
        display: "flex",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          color: THEME_COLOR.grey600,
          gap: "3px",
          fontSize: "13px",
          minWidth: "100px",
        }}
      >
        <Box
          sx={{
            color: winColor,
            fontWeight: "bold",
            fontSize: "15px",
            pt: "3px",
          }}
        >
          {gameType}
        </Box>
        <Box sx={{ flex: 1 }}>{timeElapsed}</Box>
        <Box
          sx={{
            fontWeight: "600",
            fontSize: "14px",
            color: THEME_COLOR.grey600,
            opacity: 0.75,
          }}
        >
          {gameResult}
        </Box>
        <Box>{timeDuration}</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <ChampionIcon
              championName={championName}
              championLevel={champLevel}
              size="50px"
              radius="50%"
            />
          </Box>
          <Box sx={{ ml: "7px", display: "flex", gap: "2px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <SummonerSpellIcon spellNumber={summoner1Id} />
              <SummonerSpellIcon spellNumber={summoner2Id} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <SummonerRuneIcon summonerPerkData={perks} type="primary" />
              <SummonerRuneIcon summonerPerkData={perks} type="sub" />
            </Box>
            <Box
              sx={{
                ml: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Box
                component="p"
                sx={{
                  fontWeight: "bold",
                  fontSize: "17px",
                }}
              >
                <Box component="span">{kills} /</Box>
                <Box component="span" sx={{ color: "red" }}>
                  {" "}
                  {deaths}{" "}
                </Box>
                <Box component="span">/ {assists}</Box>
              </Box>
              <Box
                sx={{
                  color: THEME_COLOR.grey700,
                  fontSize: "13.5px",
                  fontWeight: 500,
                }}
              >
                {summonerGrade}:1 평점
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "2px" }}>
          <SummonerItemIcon itemNumber={item0} />
          <SummonerItemIcon itemNumber={item1} />
          <SummonerItemIcon itemNumber={item2} />
          <SummonerItemIcon itemNumber={item3} />
          <SummonerItemIcon itemNumber={item4} />
          <SummonerItemIcon itemNumber={item5} />
          <SummonerItemIcon itemNumber={item6} />
        </Box>
      </Box>
    </Box>
  );
};

export default SummonerMatchCard;
