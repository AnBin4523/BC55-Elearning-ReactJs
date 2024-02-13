import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./_Component/Footer";
import Header from "./_Component/Header";
import BackToTop from "./_Component/BackToTop";
import { createTheme } from "@mui/material";
import { actTryLogin } from "../AdminTemplate/AuthPage/duck/action";
import { useAppDispatch } from "../../store/type";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});

export default function HomeTemplate() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actTryLogin(navigate));
    console.log("home");
  }, []);
  return (
    <div>
      <Header />
      <BackToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
