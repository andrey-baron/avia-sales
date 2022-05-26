export function msToHoursAndMinutes(duration: number) {
  let minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  return { hours, minutes };
}

export function dateFormatting(unix: number) {
  const date = new Date(unix);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();

  return `${hours}:${minutes.slice(-2)}`;
}
