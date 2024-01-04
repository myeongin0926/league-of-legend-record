import { Tier, TierRank } from "../types/SummonerType";
import SUMMONER from "../constants/Summoner";

const getProfileIconUrl = (profileIconId: number) =>
  `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${profileIconId}.png`;

const getChampionIconUrl = (championName: string) =>
  `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${championName}.png`;

const getPublicUrl = (url: string) => `${process.env.PUBLIC_URL}${url}`;

const getSummonerTierName = (tierName: Tier, tierRank: TierRank) => {
  const tier = SUMMONER.SUMMONER_TIER[tierName];
  return tier.tierRankShow ? `${tier.name} ${TierRank[tierRank]}` : tier.name;
};

const getCommaSeparatedNumber = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export {
  getProfileIconUrl,
  getPublicUrl,
  getSummonerTierName,
  getCommaSeparatedNumber,
  getChampionIconUrl,
};
