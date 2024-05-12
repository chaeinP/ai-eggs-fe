export function decodeSearchParams(searchParams: { [key: string]: string | undefined }) {
  const decodedSearchParams: { [key: string]: string[] | undefined } = {};
  if (!searchParams) return decodedSearchParams;

  Object.keys(searchParams).forEach((key) => {
    if (!!key && searchParams[key])
      decodedSearchParams[key] = decodeURIComponent(searchParams[key]!).replaceAll("+", " ").split(",");
  });

  return decodedSearchParams;
}
