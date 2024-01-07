import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Box } from "@mui/material";
import {
  getSummonerMatchInfo,
  getSummonerInfo,
  getSummonerPuuid,
  getSummonerSpellData,
  getSummonerPerkData,
} from "../api/summonerApis";
import {
  SummonerSpellInfo,
  SummonerInfo,
  SummonerMatchInfo,
  PerkInfo,
} from "../types/SummonerType";
import SummonerSearchHeader from "../components/summonerSearch/SummonerSearchHeader";
import SummonerMatchCard from "../components/summonerSearch/SummonerMatchCard";
import SummonerSearchSide from "../components/summonerSearch/SummonerSearchSide";
import useCustomQuery from "../hooks/useCustomQuery";

const SummonerSearchPage: React.FC = () => {
  const { summonerName } = useParams<{ summonerName?: string }>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [summonerData, setSummonerData] = useState<SummonerInfo | null>(null);
  const [summonerMatchInfo, setSummonerMatchInfo] = useState<SummonerMatchInfo>(
    {
      matchList: [],
      matchId: [],
    },
  );
  const [spellData, setSpellData] = useState<SummonerSpellInfo[] | null>(null);
  const [perkData, setPerkData] = useState<PerkInfo[] | null>(null);

  const updateSummonerSpellData = () => {
    getSummonerSpellData().then((data: SummonerSpellInfo[]) =>
      setSpellData(data),
    );
  };

  const updateSummonerPerkData = () => {
    getSummonerPerkData().then((data: PerkInfo[]) => setPerkData(data));
  };

  const { tablet } = useCustomQuery();

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
          updateSummonerSpellData();
          updateSummonerPerkData();
          setSummonerData(summonerInfo);
        } catch (error) {
          throw new Error("useEffect 에러");
        }
      }
    };
    fetchData();
  }, [summonerName, searchName, searchTag]);

  return (
    <Container maxWidth="lg">
      {summonerData && (
        <>
          <SummonerSearchHeader summonerInfo={summonerData} />
          <button
            onClick={() => updateSummonerMatchInfo(summonerData.puuid)}
            type="submit"
          >
            hello
          </button>
          <Box sx={{ display: tablet ? "flex" : "block", gap: "10px" }}>
            <SummonerSearchSide summonerInfo={summonerData} />
            <Box component="ul" sx={{ flex: 1 }}>
              {summonerMatchInfo?.matchList.map((matchInfo) => (
                <SummonerMatchCard
                  key={matchInfo.info.gameId}
                  matchData={matchInfo}
                  summonerInfo={summonerData}
                  spellData={spellData}
                  perkData={perkData}
                />
              ))}
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};

export default SummonerSearchPage;
