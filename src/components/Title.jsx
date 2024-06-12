import Img from "../img/smu.png";
// author: Sung-Hyuk Lee
// date: 2024.6.12
export default function Title() {
  return (
    <>
      <div className="p-5 m-5 text-center bg-light">
        <img id="imgId" src={Img} width="120px" height="120px" alt="img" />
        <h4 className="mb-4">SmartIT Blog에 오신것을 환영합니다.</h4>
      </div>
    </>
  );
}
