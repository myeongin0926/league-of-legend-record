const SUMMONER_TIER = Object.freeze({
  IRON: { name: "아이언", tierRankShow: true },
  BRONZE: { name: "브론즈", tierRankShow: true },
  SILVER: { name: "실버", tierRankShow: true },
  GOLD: { name: "골드", tierRankShow: true },
  PLATINUM: { name: "플레티넘", tierRankShow: true },
  EMERALD: { name: "에메랄드", tierRankShow: true },
  DIAMOND: { name: "다이아몬드", tierRankShow: true },
  MASTER: { name: "마스터", tierRankShow: false },
  GRANDMASTER: { name: "그랜드마스터", tierRankShow: false },
  CHALLENGER: { name: "챌린저", tierRankShow: false },
});

const SUMMONER_QUEUE_TYPE = Object.freeze({
  RANKED_SOLO_5x5: "솔로 랭크",
  RANKED_FLEX_SR: "자유 랭크",
});

const SUMMONER = {
  SUMMONER_TIER,
  SUMMONER_QUEUE_TYPE,
};

export default SUMMONER;
