export interface SummonerInfo {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
  summonerName: string;
  summonerTag: string;
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

// export enum QueueId {
//   400 = "일반",
//   420 = "솔로 랭크",
//   430 = "일반",
//   440 = "자유 랭크",
//   450 = "칼바람 나락",
//   700 = "격전",
//   830 = "AI 대전",
//   840 = "AI 대전",
//   850 = "AI 대전",
//   900 = "우르프",
//   920 = "포로왕",
//   1020 = "단일",
//   1300 = "돌격 넥서스",
//   1400 = "궁 주문서",
//   2000 = "튜토리얼",
//   2010 = "튜토리얼",
//   2020 = "튜토리얼",
// }

type MatchQueueId =
  | 400
  | 420
  | 430
  | 440
  | 450
  | 490
  | 700
  | 830
  | 840
  | 850
  | 900
  | 920
  | 1020
  | 1300
  | 1400
  | 1700
  | 2000
  | 2010
  | 2020;

export interface SummonerMatchData {
  metadata: {
    participants: string[];
  };
  info: {
    gameCreation: number;
    gameDuration: number;
    gameEndTimestamp: number;
    gameId: number;
    queueId: MatchQueueId;
    gameStartTimestamp: number;
    participants: MatchParticipant[];
  };
}

type MatchParticipant = {
  puuid: string;
  win: boolean;
};

export interface SummonerMatchInfo {
  matchList: SummonerMatchData[];
  matchId: string[];
}

export interface SummonerRanksInfo {
  [QueueType.RANKED_SOLO_5x5]?: SummonerRankInfo;
  [QueueType.RANKED_FLEX_SR]?: SummonerRankInfo;
}
