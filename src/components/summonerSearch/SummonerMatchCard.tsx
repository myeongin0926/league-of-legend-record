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
} from "../../\butils/Calculate";
import ChampionIcon from "../icon/ChampionIcon";
import SummonerSpellIcon from "../icon/SummonerSpellIcon";
import SummonerRuneIcon from "../icon/SummonerPerkIcon";

interface Props {
  matchData: SummonerMatchData;
  summonerInfo: SummonerInfo;
  spellData: SummonerSpellInfo[] | null;
  perkData: PerkInfo[] | null;
}

const SummonerMatchCard: React.FC<Props> = ({
  matchData,
  summonerInfo,
  spellData,
  perkData,
}) => {
  if (!spellData || !perkData) return null;
  const [currentSummonerMatchData] = matchData.info.participants.filter(
    (summoner) => summoner.puuid === summonerInfo.puuid,
  );
  // console.log(currentSummonerMatchData, matchData, perkData);
  const { win, championName, champLevel, summoner1Id, summoner2Id, perks } =
    currentSummonerMatchData;
  const { queueId, gameEndTimestamp, gameDuration } = matchData.info;
  const backColor = win ? THEME_COLOR.lightBlue100 : THEME_COLOR.red100;
  const winColor = win ? THEME_COLOR.lightBlue600 : THEME_COLOR.red600;
  const gameResult = win ? MATCH.RESULT.win : MATCH.RESULT.lose;
  const gameType = MATCH.GAME_TYPE[queueId];
  const timeElapsed = calculateTimeElapsed(gameEndTimestamp);
  const timeDuration = calculateGameDuration(gameDuration);

  return (
    <Box
      component="li"
      sx={{
        backgroundColor: backColor,
        height: "90px",
        borderRadius: "3px",
        padding: "10px 15px",
        borderLeft: `7px solid ${winColor}`,
        mb: "10px",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          color: THEME_COLOR.grey600,
          gap: "3px",
          fontSize: "14px",
        }}
      >
        <Box sx={{ color: winColor, fontWeight: "bold", fontSize: "16px" }}>
          {gameType}
        </Box>
        <Box sx={{ flex: 1 }}>{timeElapsed}</Box>
        <Box
          sx={{
            fontWeight: "600",
            fontSize: "15px",
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
          alignItems: "center",
        }}
      >
        <ChampionIcon
          championName={championName}
          championLevel={champLevel}
          size="60px"
          radius="50%"
        />
      </Box>
      <SummonerSpellIcon spellNumber={summoner1Id} spellData={spellData} />
      <SummonerSpellIcon spellNumber={summoner2Id} spellData={spellData} />
      <SummonerRuneIcon
        perkData={perkData}
        summonerPerkData={perks}
        type="primary"
      />
      <SummonerRuneIcon
        perkData={perkData}
        summonerPerkData={perks}
        type="sub"
      />
    </Box>
  );
};

export default SummonerMatchCard;
