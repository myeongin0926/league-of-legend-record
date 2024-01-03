import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Box } from "@mui/material";
import {
  getSummonerMatchInfo,
  getSummonerInfo,
  getSummonerPuuid,
} from "../api/summonerApis";
import SummonerSearchHeader from "../components/summonerSearch/SummonerSearchHeader";
import { SummonerInfo, SummonerMatchInfo } from "../types/SummonerType";
import SummonerMatchCard from "../components/summonerSearch/SummonerMatchCard";

const SummonerSearchPage: React.FC = () => {
  const { summonerName } = useParams<{ summonerName?: string }>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [summonerInfo, setSummonerInfo] = useState<SummonerInfo | null>(null);
  const [summonerMatchInfo, setSummonerMatchInfo] = useState<SummonerMatchInfo>(
    {
      matchList: [],
      matchId: [],
    },
  );

  const splitQueryName = (summonerName: string): [string, string] => {
    const firstDashIndex: number = summonerName.indexOf("-");
    const userName: string = summonerName.slice(0, firstDashIndex);
    const tag: string = summonerName.slice(firstDashIndex + 1);
    return [userName, tag];
  };

  const [searchName, searchTag] = splitQueryName(summonerName || "");

  const updateSummonerMatchInfo = async (puuid: string) => {
    const matchInfo = await getSummonerMatchInfo(puuid, summonerMatchInfo);
    setSummonerMatchInfo(matchInfo);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchName && searchTag) {
        try {
          const puuid = await getSummonerPuuid(searchName, searchTag);
          const summonerInfo = await getSummonerInfo(puuid);
          await updateSummonerMatchInfo(puuid);
          setSummonerInfo(summonerInfo);
        } catch (error) {
          throw new Error("useEffect 에러");
        }
      }
    };
    fetchData();
  }, [summonerName, searchName, searchTag]);

  return (
    <Container maxWidth="lg">
      {summonerInfo && (
        <>
          {" "}
          <SummonerSearchHeader summonerInfo={summonerInfo} />
          <button
            onClick={() => updateSummonerMatchInfo(summonerInfo.puuid)}
            type="submit"
          >
            hello
          </button>
          <Box component="ul">
            {" "}
            {summonerMatchInfo.matchList.map((matchInfo) => (
              <SummonerMatchCard
                key={matchInfo.info.gameId}
                matchData={matchInfo}
                summonerInfo={summonerInfo}
              />
            ))}
          </Box>
        </>
      )}
    </Container>
  );
};

export default SummonerSearchPage;
