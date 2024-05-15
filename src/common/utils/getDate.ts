export function getDate(isoString: string) {
  return isoString.split("T")[0].replaceAll("-", ".");
}
