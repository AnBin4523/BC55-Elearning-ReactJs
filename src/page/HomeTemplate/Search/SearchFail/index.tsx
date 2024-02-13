import { NavLink } from "react-router-dom";
export default function SearchFail() {
  return (
    <div className="content_search">
      <canvas className="snow" id="snow" />
      <div className="main-text">
        <h1>
          Aw jeez.
          <br />
          Dữ liệu bạn tìm không tồn tại.
        </h1>
        <NavLink to="/">
          <div className="home-link">Quay lại trang chủ.</div>
        </NavLink>
      </div>
      <div className="ground">
        <div className="mound">
          <div className="mound_text">404</div>
          <div className="mound_spade" />
        </div>
      </div>
    </div>
  );
}
