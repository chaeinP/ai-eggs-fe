export function getDateTime(isoString: string) {
  const split = isoString.split("T");
  const date = split[0].replaceAll("-", ".");
  const time = split[1].split(".")[0];

  return `${date} ${time.slice(0, 5)}`;
}
