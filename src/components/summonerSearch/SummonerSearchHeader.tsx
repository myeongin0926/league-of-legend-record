import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import {
  SummonerInfo,
  SummonerRanksInfo,
  SummonerRankInfo,
  QueueType,
  QueueName,
} from "../../types/SummonerType";
import { getProfileIconUrl, getPublicUrl } from "../../utils/MessageFormat";
import { apiKrRequester } from "../../api";
import SummonerTierCard from "./SummonerTierCard";
import { THEME_COLOR } from "../../theme";

interface Props {
  summonerInfo: SummonerInfo;
}

const SummonerSearchHeader: React.FC<Props> = ({ summonerInfo }) => {
  const { summonerName, summonerTag, profileIconId, summonerLevel, name, id } =
    summonerInfo;
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
            alt="SummonerProfileIcon"
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
      {renderSummonerTierCard(QueueType.RANKED_SOLO_5x5, "솔로 랭크")}
      {renderSummonerTierCard(QueueType.RANKED_FLEX_SR, "자유 랭크")}
    </Box>
  );
};

export default SummonerSearchHeader;
