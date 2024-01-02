import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container } from "@mui/material";
import { apiAsiaRequester, apiKrRequester } from "../api";
import SummonerSearchHeader from "../components/summonerSearch/SummonerSearchHeader";
import { SummonerInfo } from "../types/SummonerType";

const SummonerSearchPage: React.FC = () => {
  const { summonerName } = useParams<{ summonerName?: string }>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [summonerInfo, setSummonerInfo] = useState<SummonerInfo | null>(null);

  const splitQueryName = (summonerName: string): [string, string] => {
    const firstDashIndex: number = summonerName.indexOf("-");
    if (firstDashIndex !== -1) {
      const userName: string = summonerName.slice(0, firstDashIndex);
      const tag: string = summonerName.slice(firstDashIndex + 1);
      return [userName, tag];
    }
    return [summonerName, ""];
  };

  const [searchName, searchTag] = splitQueryName(summonerName || "");

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

  useEffect(() => {
    const fetchData = async () => {
      if (summonerName) {
        if (searchName && searchTag) {
          try {
            const puuid = await getSummonerPuuid(searchName, searchTag);
            const summonerInfo = await getSummonerInfo(puuid);
            setSummonerInfo(summonerInfo);
          } catch (error) {
            throw new Error("useEffect 에러");
          }
        }
      }
    };
    fetchData();
  }, [summonerName, searchName, searchTag]);

  return (
    <Container maxWidth="lg">
      {summonerInfo && <SummonerSearchHeader summonerInfo={summonerInfo} />}
    </Container>
  );
};

export default SummonerSearchPage;
