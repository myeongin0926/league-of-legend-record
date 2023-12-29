import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import {
  SummonerInfo,
  SummonerRanksInfo,
  SummonerRankInfo,
  QueueType,
  QueueName,
} from "../../types/SummonerType";
import { getProfileIconUrl } from "../../utils/MessageFormat";
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

  const renderSummonerTierCard = (
    queueType: QueueType | undefined,
    queueName: QueueName,
  ) => {
    if (!queueType) return null;

    const rankInfo = summonerRanksInfo[queueType];
    return <SummonerTierCard rankInfo={rankInfo} queueName={queueName} />;
  };

  const profileIconUrl = getProfileIconUrl(profileIconId);

  return (
    <Box>
      <Box
        component="img"
        sx={{ width: "120px", objectFit: "contain", borderRadius: "50%" }}
        src={profileIconUrl}
        alt="SummonerProfileIcon"
      />
      <Box component="p">
        <Box component="span">{userName}</Box>
        <Box component="span">#{tag}</Box>
      </Box>
      <Box component="span">{summonerLevel}</Box>
      {renderSummonerTierCard(QueueType.RANKED_SOLO_5x5, "솔로 랭크")}
      {renderSummonerTierCard(QueueType.RANKED_FLEX_SR, "자유 랭크")}
    </Box>
  );
};

export default SummonerSearchHeader;
