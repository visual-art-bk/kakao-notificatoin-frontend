export default function makeUrl(pathname: string) {
  const joiner = "/";
  const { origin } = window.location;
  return origin + joiner + pathname;
}
