import axios from "axios";
import {
  SummonerMatchInfo,
  SummonerMatchData,
  SummonerSpellInfo,
} from "../types/SummonerType";
import { apiAsiaRequester, apiKrRequester } from ".";
import SUMMONER from "../constants/Summoner";

const getSummonerInfo = async (puuid: string) => {
  try {
    const summonerInfo = await apiKrRequester
      .get(`/lol/summoner/v4/summoners/by-puuid/${puuid}`)
      .then((res) => res.data);
    const { gameName, tagLine } = await apiAsiaRequester
      .get(`/riot/account/v1/accounts/by-puuid/${puuid}`)
      .then((res) => res.data);
    return {
      ...summonerInfo,
      summonerName: gameName,
      summonerTag: tagLine,
    };
  } catch (error) {
    throw new Error("소환사 정보 못 불러옴");
  }
};

const getSummonerPuuid = async (userName: string, tag: string) => {
  try {
    const {
      data: { puuid },
    } = await apiAsiaRequester.get(
      `/riot/account/v1/accounts/by-riot-id/${userName}/${tag}`,
    );
    return puuid;
  } catch (error) {
    throw new Error("유저 아이디 못 받아옴");
  }
};

const getSummonerMatchInfo = async (
  puuid: string,
  summonerMatchInfo: SummonerMatchInfo,
) => {
  try {
    const { matchId } = summonerMatchInfo;
    const start = matchId.length;
    const count = SUMMONER.SUMMONER_MATCH.REQUEST_SIZE;
    const matchIdsResponse = await apiAsiaRequester.get(
      `/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}`,
    );
    const matchIds = matchIdsResponse.data;

    const matchInfoRequests: Promise<SummonerMatchData>[] = matchIds.map(
      (id: string) =>
        apiAsiaRequester
          .get(`/lol/match/v5/matches/${id}`)
          .then((res) => res.data),
    );

    const matchInfo = await Promise.all(matchInfoRequests);

    return {
      matchList: [...summonerMatchInfo.matchList, ...matchInfo],
      matchId: [...summonerMatchInfo.matchId, ...matchIds],
    };
  } catch (error) {
    throw new Error("소환사 정보를 가져오는 데 문제가 발생했습니다");
  }
};

const getSummonerSpellData = async () => {
  const res = await axios.get(
    "https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/summoner.json",
  );
  const { data } = res.data;

  const spellData: SummonerSpellInfo[] = Object.values(data);
  return spellData;
};

const getSummonerPerkData = async () => {
  const res = await axios.get(
    "https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/runesReforged.json",
  );
  const perkData = res.data;
  return perkData;
};
export {
  getSummonerInfo,
  getSummonerPuuid,
  getSummonerMatchInfo,
  getSummonerSpellData,
  getSummonerPerkData,
};
