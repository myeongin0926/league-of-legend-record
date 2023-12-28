import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiAsiaRequester, apiKrRequester } from "../api";
import SummonerSearchHeader from "../components/summonerSearch/SummonerSearchHeader";

interface Summoner {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

const SummonerSearchPage: React.FC = () => {
  const { summonerName } = useParams<{ summonerName?: string }>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [summonerInfo, setSummonerInfo] = useState<Summoner | undefined>(
    undefined,
  );

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

  const splitSummonerName = (summonerName: string): [string, string] => {
    const firstDashIndex: number = summonerName.indexOf("-");
    if (firstDashIndex !== -1) {
      const userName: string = summonerName.slice(0, firstDashIndex);
      const tag: string = summonerName.slice(firstDashIndex + 1);
      return [userName, tag];
    }
    return [summonerName, ""];
  };

  const [userName, tag] = splitSummonerName(summonerName || "");

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
        if (userName && tag) {
          try {
            const puuid = await getPuuid(userName, tag);
            const summonerInfo = await getSummonerInfo(puuid);
            setSummonerInfo({ ...summonerInfo.data, userName, tag });
          } catch (error) {
            console.error(error);
          }
        }
      }
    };

    fetchData();
  }, [summonerName, userName, tag]);

  return (
    <div>
      <SummonerSearchHeader summonerInfo={summonerInfo} />
    </div>
  );
};

export default SummonerSearchPage;
