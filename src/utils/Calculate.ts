const calculateWinRate = (wins: number, losses: number): string => {
  const totalGames = wins + losses;
  const winRate = (wins / totalGames) * 100;

  if (Number.isInteger(winRate)) {
    return `${winRate}%`;
  }
  return `${winRate.toFixed(1)}%`;
};

export { calculateWinRate };
