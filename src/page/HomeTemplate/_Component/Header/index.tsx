import { actLogOut } from "../../../../page/AdminTemplate/AuthPage/duck/action";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/type";

export default function Header() {
  const [status, setStatus] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const renderUser = () => {
    if (localStorage.getItem("USER_CUSTOMER")) {
      const user = JSON.parse(localStorage.getItem("USER_CUSTOMER") || "");
      return (
        <>
          <div
            className="logo-user"
            onClick={() => {
              setStatus((preValue) => !preValue);
            }}
          >
            <span>
              <img
                src="	https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
                alt="logo"
              />
            </span>
            <p>{`xin chào, ${user.hoTen}`}</p>
          </div>
          <div
            className="about-user-overplay"
            style={{ display: `${status ? "block" : "none"}` }}
            onClick={() => {
              setStatus(false);
            }}
          >
            {" "}
          </div>
          <div
            className="about-user "
            style={{
              transform: `${status ? "translateX(0)" : "translateX(100%)"}`,
              transition: "all 0.5s",
            }}
          >
            <a
              onClick={() => {
                setStatus(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </a>
            <Link to={"/thong-tin-ca-nhan"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Thông tin cá nhân
            </Link>
            <a
              onClick={() => {
                dispatch(actLogOut(navigate));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Đăng xuất
            </a>
          </div>
        </>
      );
    } else {
      return (
        <button
          className="btn btn-warning text-white"
          onClick={() => {
            navigate("/auth", { replace: false });
          }}
        >
          ĐĂNG NHẬP
        </button>
      );
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate(`/timkiem/${event.target[0].value}`);
    if (event.target[0].value == "") {
      navigate(`/`);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg  navbar-dark pl-5 pr-5 headerFixed"
        style={{ width: "100%" }}
      >
        <NavLink to="/">
          <img
            className="logo"
            src={require("../../../../Image/logo (1).png")}
            width={250}
          />
        </NavLink>
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            className="searchForm mt-2"
            type="text"
            placeholder="Tìm kiếm"
          />
        </form>
        <button
          className="navbar-toggler p-2 text-light"
          type="button"
          onClick={() => {
            setMenu(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <div
          className="menu-overplay"
          style={{ display: `${menu ? "block" : "none"}` }}
          onClick={() => {
            setMenu(false);
          }}
        ></div>
        <div
          className="menu"
          style={{
            transform: `${menu ? "translateX(0)" : "translateX(100%)"}`,
            transition: "all 0.5s",
          }}
        >
          {renderUser()}
          <form onSubmit={handleSubmit}>
            {" "}
            <input className="searchForm" type="text" placeholder="Tìm kiếm" />
          </form>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "my-active nav-link text-dark"
                      : "nav-link text-dark"
                  }
                  to="/"
                >
                  {" "}
                  TRANG CHỦ
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "my-active nav-link text-dark"
                      : "nav-link text-dark"
                  }
                  to="/danhmuckhoahoc"
                >
                  DANH MỤC
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "my-active nav-link text-dark"
                      : "nav-link  text-dark"
                  }
                  to="/blog"
                >
                  BLOG
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "my-active nav-link text-dark"
                      : "nav-link  text-dark"
                  }
                  to="/sukien "
                >
                  SỰ KIỆN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "my-active nav-link text-dark"
                      : "nav-link  text-dark"
                  }
                  to="/thongtin"
                >
                  THÔNG TIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav">
            <li
              className="nav-item "
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "my-active nav-link text-dark"
                    : "nav-link text-dark"
                }
                to="/"
              >
                {" "}
                TRANG CHỦ
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "my-active nav-link text-dark"
                    : "nav-link text-dark"
                }
                to="/danhmuckhoahoc"
              >
                DANH MỤC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "my-active nav-link  text-dark"
                    : "nav-link  text-dark"
                }
                to="/blog"
              >
                BLOG
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "my-active nav-link  text-dark"
                    : "nav-link  text-dark"
                }
                to="/sukien "
              >
                SỰ KIỆN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "my-active nav-link  text-dark"
                    : "nav-link  text-dark"
                }
                to="/thongtin"
              >
                THÔNG TIN
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="button-lg">{renderUser()}</div>
      </nav>
    </>
  );
}
