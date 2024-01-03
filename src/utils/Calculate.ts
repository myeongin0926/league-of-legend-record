const calculateWinRate = (wins: number, losses: number): string => {
  const totalGames = wins + losses;
  const winRate = (wins / totalGames) * 100;

  if (Number.isInteger(winRate)) {
    return `${winRate}%`;
  }
  return `${winRate.toFixed(1)}%`;
};

const calculateTimeElapsed = (gameEndDate: number): string => {
  const now = Date.now();
  const timeDiff = now - gameEndDate;

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years}년 전`;
  }
  if (months > 0) {
    return `${months}달 전`;
  }
  if (weeks > 0) {
    return `${weeks}주 전`;
  }
  if (days > 0) {
    return `${days}일 전`;
  }
  if (hours > 0) {
    return `${hours}시간 전`;
  }
  return `${minutes}분 전`;
};

function calculateGameDuration(gameDuration: number) {
  const hours = Math.floor(gameDuration / 3600);
  const minutes = Math.floor((gameDuration % 3600) / 60);
  const seconds = gameDuration % 60;

  let durationString = "";

  if (hours > 0) {
    durationString += `${hours}시간 `;
  }

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  durationString += `${formattedMinutes}분 ${formattedSeconds}초`;

  return durationString.trim(); // 좌우 공백 제거
}

export { calculateWinRate, calculateTimeElapsed, calculateGameDuration };
