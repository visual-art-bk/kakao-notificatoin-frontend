import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import UrlManager from "@/helpers/UrlManager/UrlManager";
import "./reservation-rq.module.css";
export default function ReservationQR() {
  const [stateRsvNo, setStateRsvNo] = useState({
    rsv_no: "",
    rsv_date: "",
  });
  const { urlToRsvNo } = UrlManager.getUrls();

  let response: Response;
  const fetchForQR = async () => {
    try {
      console.log("request: ", urlToRsvNo);

      response = await fetch(urlToRsvNo, {
        method: "GET",
      });

      if (response.status === 200) {
        await response.json().then((value: string) => {
          console.warn(value);
          setStateRsvNo(JSON.parse(value));
        });
        return;
      } else {
        console.error("Failed reponse status", response.status);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchForQR();
  }, []);
  return (
    <div className="reservation-qr">
      <div className="resservation-qr-wrapper">
        <QRCode
          size={64}
          style={{ height: "auto" }}
          value={stateRsvNo.rsv_no}
          viewBox={`0 0 64 64`}
          className="qr-code"
        />
        <div className="rsv-detail">
          <div className="rsv-no">
            <span>예약번호: </span>
            <span>{stateRsvNo.rsv_no}</span>
          </div>
          <div className="rsv-date">
            <span>예약시간: </span>
            <span>{stateRsvNo.rsv_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
