import UrlManager from "@/helpers/UrlManager/UrlManager";
import { useEffect, useState } from "react";
import "./dev-test-form.module.css";
const { test_url, urlToReservation } = UrlManager.getUrls();

interface iTestJson {
  userId: string;
  id: string;
  title: string;
  body: string;
}
export default function __DEV__TEST__FORM() {
  const [stateTestContent, setStateTestContent] = useState<iTestJson>();
  const [stateStatusCode, setStateStatusCode] = useState(undefined);
  const [stateResToKakaoBiz, setStateResToKakaoBiz] = useState({
    header: {
      resultMessage: "Pending",
      isSuccessful: false,
    },
    message: {
      sendResults: [],
    },
  });

  /**
   *
   */
  let response: Response;
  const fetchTest = async () => {
    console.log("request: ", urlToReservation);

    try {
      response = await fetch(urlToReservation, {
        method: "GET",
      });
      if (response.status === 200) {
        await response.json().then((value: string) => {
          console.log(JSON.parse(value));

          setStateResToKakaoBiz(JSON.parse(value));
        });
        return;
      } else {
        console.error(response);
        console.error("response.status", response.status);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // const fetchWithNhn = async () => {
  //   let response: Response;

  //   const appkey_nhn_cloud = "I9rm8V5DTRu74MgD";
  //   const url = `https://api-alimtalk.cloud.toast.com/alimtalk/v2.3/appkeys/${appkey_nhn_cloud}/messages`;
  //   const headers = {
  //     "X-Secret-Key": "YH4BiRlS0PvxJCfGLaBeZMpwmTo6yJ2M",
  //     "Content-Type": "application/json;charset=UTF-8",
  //   };
  //   const reqBody = {
  //     senderKey: "59b88ad9e01bf64df9092426435ea60b9199b190",
  //     templateCode: "rchr_01_rsv",
  //     recipientList: [
  //       {
  //         recipientNo: "01099671657",
  //         templateParameter: {
  //           rsv_no: "1",
  //           wt_rest: "3",
  //           wt_time: "5",
  //         },
  //       },
  //     ],
  //   };

  //   try {
  //     console.log("request: ", url);

  //     response = await fetch(url, {
  //       headers,
  //       body: JSON.stringify(reqBody),
  //       method: 'POST'
  //     });

  //     if (response.status === 200) {
  //       await response.json().then((value: string) => {
  //         console.warn(value)
  //         setStateTestContent(JSON.parse(value));
  //       });
  //       return;
  //     } else {
  //       console.error('Failed reponse status', response.status)
  //     }

  //   } catch (err) {
  //     console.error("err on ", url);
  //   }
  // };

  /**
   *
   */
  const handleTestButton = () => {
    fetchTest();
  };

  useEffect(() => {
    console.log(stateTestContent);
  }, [stateTestContent]);

  return (
    <div className="dev-test-form">
      <div className="test-button">
        <form
          method="POST"
          action={UrlManager.getUrls().urlToReservation}
          className="dev-test-rsv-form"
        >
          <div className="title">
            <h4>뤼초록 테이블</h4>
            <img
              style={{
                width: "64px",
                height: "64px",
              }}
              src="https://rchr-lab.store/wp-content/plugins/kakao-notification/assets/img/favicon_v.1.0.0.png"
            ></img>
          </div>
          <div className="inputs">
            <label>전화번호 입력</label>
            <input
              type="text"
              name="recipientNo"
              placeholder="숫자만 입력하세요."
            ></input>
            {/* <label>추가사항</label> */}
            {/* <input
              type="text"
              name="rsv_comment"
              placeholder="(옵션)"
            ></input> */}
            <button type="submit">예약하기</button>
          </div>
        </form>
        {/* <button type="button" onClick={handleTestButton}>
          TEST
        </button>
        {stateResToKakaoBiz.header.isSuccessful === false ? (
          <span>Loading...</span>
        ) : (
          <>
            <h3>Status: {stateResToKakaoBiz?.header.resultMessage}</h3>
          </>
        )} */}
      </div>
    </div>
  );
}
