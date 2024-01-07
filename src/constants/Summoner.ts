const SUMMONER_TIER = Object.freeze({
  IRON: { name: "Iron", tierRankShow: true },
  BRONZE: { name: "Bronze", tierRankShow: true },
  SILVER: { name: "Silver", tierRankShow: true },
  GOLD: { name: "Gold", tierRankShow: true },
  PLATINUM: { name: "Platinum", tierRankShow: true },
  EMERALD: { name: "Emerald", tierRankShow: true },
  DIAMOND: { name: "Diamond", tierRankShow: true },
  MASTER: { name: "Master", tierRankShow: false },
  GRANDMASTER: { name: "GrandMaster", tierRankShow: false },
  CHALLENGER: { name: "Challenger", tierRankShow: false },
});

const SUMMONER_QUEUE_TYPE = Object.freeze({
  RANKED_SOLO_5x5: "솔로 랭크",
  RANKED_FLEX_SR: "자유 랭크",
});

const SUMMONER_MATCH = Object.freeze({
  REQUEST_SIZE: 1,
});

const SUMMONER_RUNE = Object.freeze({
  PRIMARY: "primary",
  SUB: "sub",
  PRIMARY_STYLE: "primaryStyle",
  SUB_STYLE: "subStyle",
});

const SUMMONER = {
  SUMMONER_TIER,
  SUMMONER_QUEUE_TYPE,
  SUMMONER_MATCH,
  SUMMONER_RUNE,
};

export default SUMMONER;
