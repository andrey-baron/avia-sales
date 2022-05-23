export function buildUrl(path: string, route: any[] = [], query = "?", encodeUri = true): string {
  const routeParams = route.length > 0 ? `/${route.join("/")}` : "";
  query = encodeUri ? encodeURI(query) : query;
  const url = `${process.env.REACT_APP_API_SERVER}/${path}${routeParams}${query}`;
  return url;
}
