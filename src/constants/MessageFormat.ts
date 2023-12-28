import { Tier, TierRank } from "../types/SummonerType";
import SUMMONER from "./Summoner";

const PROFILE_ICON_URL = (profileIconId: number) =>
  `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${profileIconId}.png`;

const PUBLIC_IMAGE_URL = (url: string) => `${process.env.PUBLIC_URL}${url}`;

const SUMMONER_TIER_NAME = (tierName: Tier, tierRank: TierRank) => {
  const tier = SUMMONER.SUMMONER_TIER[tierName];
  return tier.tierRankShow ? `${tier.name} ${TierRank[tierRank]}` : tier.name;
};

export { PROFILE_ICON_URL, PUBLIC_IMAGE_URL, SUMMONER_TIER_NAME };
