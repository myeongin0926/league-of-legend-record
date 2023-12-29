export interface SummonerInfo {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
  userName: string;
  tag: string;
}

export type Tier =
  | "IRON"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "DIAMOND"
  | "EMERALD"
  | "MASTER"
  | "GRANDMASTER"
  | "CHALLENGER";

export enum TierRank {
  I = 1,
  II = 2,
  III = 3,
  IV = 4,
}

export enum QueueType {
  RANKED_SOLO_5x5 = "RANKED_SOLO_5x5",
  RANKED_FLEX_SR = "RANKED_FLEX_SR",
}

export type QueueName = "자유 랭크" | "솔로 랭크";

export interface SummonerRankInfo {
  leaguePoints: number;
  losses: number;
  queueType: QueueType;
  rank: TierRank;
  tier: Tier;
  wins: number;
}

export interface SummonerRanksInfo {
  [QueueType.RANKED_SOLO_5x5]?: SummonerRankInfo;
  [QueueType.RANKED_FLEX_SR]?: SummonerRankInfo;
}
