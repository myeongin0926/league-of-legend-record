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
import SummonerItemIcon from "../icon/SummonerItemIcon";

interface Props {
  matchData: SummonerMatchData;
  summonerInfo: SummonerInfo;
}

const SummonerMatchCard: React.FC<Props> = ({ matchData, summonerInfo }) => {
  const [currentSummonerMatchData] = matchData.info.participants.filter(
    (summoner) => summoner.puuid === summonerInfo.puuid,
  );
  // console.log(currentSummonerMatchData, matchData, perkData);
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
  } = currentSummonerMatchData;
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
        padding: "12px 15px 10px 15px",
        borderLeft: `7px solid ${winColor}`,
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
          fontSize: "14px",
        }}
      >
        <Box
          sx={{
            color: winColor,
            fontWeight: "bold",
            fontSize: "16px",
            pt: "3px",
          }}
        >
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
      <Box sx={{ background: "red" }}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <ChampionIcon
              championName={championName}
              championLevel={champLevel}
              size="52px"
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
          </Box>
          <Box>
            {/* <SummonerItemIcon itemNumber={item0} itemData={itemData} />
            <SummonerItemIcon itemNumber={item1} itemData={itemData} />
            <SummonerItemIcon itemNumber={item2} itemData={itemData} />
            <SummonerItemIcon itemNumber={item3} itemData={itemData} />
            <SummonerItemIcon itemNumber={item4} itemData={itemData} />
            <SummonerItemIcon itemNumber={item5} itemData={itemData} />
            <SummonerItemIcon itemNumber={item6} itemData={itemData} /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SummonerMatchCard;
