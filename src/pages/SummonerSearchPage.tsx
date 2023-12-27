import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiAsiaRequester, apiKrRequester } from "../api";

type Summoner = {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
};

const SummonerSearchPage: React.FC = () => {
  const { summonerName } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [summonerInfo, setSummonerInfo] = useState<Summoner>();

  const getPuuid = async (userName: string, tag: string): Promise<string> => {
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
  const getSummonerInfo = async (puuid: string) => {
    try {
      return await apiKrRequester.get(
        `/lol/summoner/v4/summoners/by-puuid/${puuid}`,
      );
    } catch (error) {
      throw new Error("소환사 정보 못 불러옴");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      if (summonerName) {
        const [userName, tag] = summonerName.split("-");
        if (userName && tag) {
          try {
            const puuid = await getPuuid(userName, tag);
            const summonerInfo = await getSummonerInfo(puuid);
            setSummonerInfo(summonerInfo.data);
          } catch (error) {
            console.error(error);
          }
        }
      }
    };

    fetchData();
  }, [summonerName]);
  console.log(summonerInfo);
  return <div>Search</div>;
};

export default SummonerSearchPage;
