import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { apiKrRequester } from "../../api";
import SummonerTierCard from "./SummonerTierCard";
import {
  SummonerRanksInfo,
  SummonerRankInfo,
  QueueType,
  QueueName,
  SummonerInfo,
} from "../../types/SummonerType";

interface Props {
  summonerInfo: SummonerInfo;
}

const SummonerSearchSide: React.FC<Props> = ({ summonerInfo }) => {
  const [summonerRanksInfo, setSummonerRanksInfo] = useState<SummonerRanksInfo>(
    {},
  );

  const { id } = summonerInfo;
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

  const renderSummonerTierCard = (
    queueType: QueueType | undefined,
    queueName: QueueName,
  ) => {
    if (!queueType) return null;

    const rankInfo = summonerRanksInfo[queueType];
    return <SummonerTierCard rankInfo={rankInfo} queueName={queueName} />;
  };
  return (
    <Box>
      {renderSummonerTierCard(QueueType.RANKED_SOLO_5x5, "솔로 랭크")}
      {renderSummonerTierCard(QueueType.RANKED_FLEX_SR, "자유 랭크")}
    </Box>
  );
};

export default SummonerSearchSide;
