export default function MainForm() {
  return (
    <div className="main-form-wrapper">
      <form method="post" action="">
        <label>전화번호</label>
        <input type="text" name="recipientNo" />
        <input type="submit">예약하기</input>
      </form>
    </div>
  );
}
