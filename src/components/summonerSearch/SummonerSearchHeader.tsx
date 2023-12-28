import React from "react";

type SummonerSearchHeader = {
  summonerInfo: any;
};

const SummonerSearchHeader: React.FC<SummonerSearchHeader> = ({
  summonerInfo,
}) => {
  console.log(summonerInfo);
  return <div />;
};

export default SummonerSearchHeader;
