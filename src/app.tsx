import { createRoot } from "react-dom/client";
import KakaoReservation from "./KakaoReservation/KakaoReservation";
import ReservationQR from "./ReservationQR/ReservationQR";
const rootID = "kakaoRoot";
const rsvNoID = "kakaoNotiRsvNo";
const rootElement = document.getElementById(rootID);
const rootElementToRsvNoId = document.getElementById(rsvNoID);

if (rootElement === null) {
  console.error("해당 id를 참조한 엘리멘터 값이 null입니다. id: " + rootID);
} else {
  createRoot(rootElement).render(<App></App>);
}
if (rootElementToRsvNoId === null) {
  console.error("해당 id를 참조한 엘리멘터 값이 null입니다. id: " + rsvNoID);
} else {
  createRoot(rootElementToRsvNoId).render(<QrContainer></QrContainer>);
}

export default function App() {
  return <KakaoReservation></KakaoReservation>;
}
function QrContainer() {
  return <ReservationQR></ReservationQR>;
}
