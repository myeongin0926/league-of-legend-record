import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import {
  SummonerInfo,
  SummonerRanksInfo,
  SummonerRankInfo,
  QueueType,
} from "../../types/SummonerType";
import { PROFILE_ICON_URL } from "../../constants/MessageFormat";
import { apiKrRequester } from "../../api";
import SummonerTierCard from "./SummonerTierCard";

interface Props {
  summonerInfo: SummonerInfo;
}

const SummonerSearchHeader: React.FC<Props> = ({ summonerInfo }) => {
  const { userName, profileIconId, summonerLevel, tag, id } = summonerInfo;
  const [summonerRanksInfo, setSummonerRanksInfo] = useState<SummonerRanksInfo>(
    {},
  );

  useEffect(() => {
    const fetchSummonerRanksInfo = async () => {
      try {
        const response = await apiKrRequester(
          `/lol/league/v4/entries/by-summoner/${id}`,
        );
        const ranksInfo: SummonerRanksInfo = {};

        response.data.forEach((item: SummonerRankInfo) => {
          if (Object.values(QueueType).includes(item.queueType as QueueType)) {
            ranksInfo[item.queueType] = item;
          }
        });

        setSummonerRanksInfo(ranksInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSummonerRanksInfo();
  }, [id]);

  const renderSummonerTierCard = (queueType: QueueType) => {
    const rankInfo = summonerRanksInfo[queueType] || "UnRanked";
    return <SummonerTierCard rankInfo={rankInfo} />;
  };
  const profileIconUrl = PROFILE_ICON_URL(profileIconId);

  return (
    <Box>
      <Box
        component="img"
        style={{ borderRadius: "50%" }}
        src={profileIconUrl}
        alt="SummonerProfileIcon"
      />
      <Box component="p">
        <Box component="span">{userName}</Box>
        <Box component="span">#{tag}</Box>
      </Box>
      <Box component="span">{summonerLevel}</Box>
      {renderSummonerTierCard(QueueType.RANKED_SOLO_5x5)}
      {renderSummonerTierCard(QueueType.RANKED_FLEX_SR)}
    </Box>
  );
};

export default SummonerSearchHeader;
