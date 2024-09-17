export function formatDuration(seconds: number) {
  // Convert seconds to minutes and remaining seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.ceil(seconds % 60);

  // Add leading zero to minutes if less than 10
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  // Add leading zero to seconds if less than 10
  const formattedSeconds =
    remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

  return `${formattedMinutes}:${formattedSeconds}`;
}

export function timeToSeconds(timeString: string) {
  // Split by ":"
  const [minutes, seconds] = timeString.split(':').map(Number);

  // Calculate seconds
  return minutes * 60 + seconds;
}
