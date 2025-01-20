import getRouteNamespaces from "./getRouteNamespaces";
import getRoutePaths from "./getRoutePaths";
import getRoutePrefixes from "./getRoutePrefixes";
import makePathnames from "./makePathnames";
import makeUrl from "./makeUrl";

const { prefixWpJson } = getRoutePrefixes();
const { nameSpaceKakaoNotificatins } = getRouteNamespaces();
const { test, reservation, rsvNo } = getRoutePaths();

const test_url = makeUrl(
  makePathnames({
    prefix: prefixWpJson,
    namespace: nameSpaceKakaoNotificatins,
    pathnames: test,
  })
);

const urlToReservation = makeUrl(
  makePathnames({
    prefix: prefixWpJson,
    namespace: nameSpaceKakaoNotificatins,
    pathnames: reservation,
  })
);

const urlToRsvNo = makeUrl(
  makePathnames({
    prefix: prefixWpJson,
    namespace: nameSpaceKakaoNotificatins,
    pathnames: rsvNo,
  })
);

export default function getUrls() {
  return {
    test_url,
    urlToReservation,
    urlToRsvNo,
  };
}
