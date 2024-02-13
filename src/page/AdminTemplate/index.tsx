import { useEffect } from "react";
import NavbarAdmin from "./_components";
import styled from "@emotion/styled";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/type";
import { actTryLogin } from "./AuthPage/duck/action";

export default function AdminTemplate() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(actTryLogin(navigate));
  }, []);
  const Wrapper = styled.section`
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
  `;
  if (localStorage.getItem("USER_CUSTOMER")) {
    return (
      <Wrapper className="relative">
        <div className="-translate-x-2/4 -translate-y-2/4 absolute top-3/4 left-2/4 text-center ">
          <h3 className="text-[40px] font-medium">Có gì đó sai ở đây</h3>
          <Link
            to={"/"}
            className="bg-green-500 py-[10px] px-[20px] text-white mt-[16px] rounded-[8px] inline-block"
          >
            Quay về trang chủ
          </Link>
        </div>
      </Wrapper>
    );
  } else if (!localStorage.getItem("USER_ADMIN")) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <div>
      <NavbarAdmin />
    </div>
  );
}
