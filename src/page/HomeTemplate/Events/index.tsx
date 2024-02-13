import { useState, useEffect } from "react";
import { Grid, ThemeProvider } from "@mui/material";
import { theme } from "..";
import Loader from "Loader";
import Countdown, { CountdownRenderProps } from "react-countdown";

export default function Events() {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStatus(false);
    }, 1000);
  }, []);
  if (status) return <Loader color={"#f6ba35"} value={50} />;
  // Renderer callback with condition
  const renderer = ({
    formatted: { days, hours, minutes, seconds },
    completed,
  }: CountdownRenderProps) => {
    // Render a countdown
    return (
      <>
        <div className="flex flex-col mr-5 ">
          <span className="text-[#ffbe0b] text-[60px] font-semibold">
            {days}
          </span>
          <span className="text-[20px] text-white">NGÀY</span>
        </div>
        <div className="flex flex-col mr-5 ">
          <span className="text-[#fb5607] text-[60px] font-semibold">
            {hours}
          </span>
          <span className="text-[20px] text-white">GIỜ</span>
        </div>
        <div className="flex flex-col mr-5 ">
          <span className="text-[#ff006e] text-[60px] font-semibold">
            {minutes}
          </span>
          <span className="text-[20px] text-white">PHÚT</span>
        </div>
        <div className="flex flex-col ">
          <span className="text-[#8338ec] text-[60px] font-semibold">
            {seconds}
          </span>
          <span className="text-[20px] text-white">GIÂY</span>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="relative bg-event grayscale-[50%]">
        <div className="py-[200px]  px-[50px] relative z-10">
          <div className="bg-event1 absolute top-0 left-0 h-full w-full -z-10 "></div>
          <div className="flex">
            <Countdown
              zeroPadTime={2}
              zeroPadDays={2}
              date={"2023-09-29T00:00:00"}
              renderer={renderer}
              autoStart
            />
          </div>
          <h4 className="text-[40px] py-[10px] font-semibold text-white uppercase">
            Sự kiện công nghệ lớn nhất 2023
          </h4>
          <h6 className="text-[18px] text-white font-medium">
            {" "}
            28 tháng 09, 2023, Việt Nam
          </h6>
        </div>
      </div>

      <div className="p-[50px]">
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <img
                className="animate-pulse w-full h-[270px] object-contain"
                src="https://demo2.cybersoft.edu.vn/static/media/it.ef68b551.png"
                alt="logo"
              />
            </Grid>
            <Grid item md={6}>
              <h5 className="font-semibold uppercase text-[#9f1f56] md:text-[30px] mb-[10px] xs:text-[25px]">
                Sự kiện công nghệ dành cho startup
              </h5>
              <h6 className="font-medium">Nơi gặp gỡ của những tư tưởng lớn</h6>
              <p className="my-4 text-[#8c8c8c] xs:text-[12px] md:text-[16px]">
                Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt
                Nam tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên
                phong, bao gồm Artificial Intelligence (trí tuệ nhân tạo),
                Internet of Things (Internet vạn vật), Blockchain (Chuỗi khối)
                và Augmented reality/Virtual Reality (Thực tế tăng cường/Thực tế
                ảo)
              </p>
              <button className="bg-[#41b294] text-white rounded p-2 uppercase mr-3 hover:scale-95 transition-all delay-100">
                Tham gia
              </button>
              <button className="bg-[#f6ba35] text-white rounded p-2 uppercase hover:scale-95 transition-all delay-100">
                Tìm hiểu thêm
              </button>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>

      <div className="bg-eventCeo ">
        <h6 className="text-center p-[20px] text-[30px] text-[#f6ba35] font-semibold uppercase">
          Các nhà đồng sáng tạo
        </h6>
        <ThemeProvider theme={theme}>
          <Grid
            className="event-ceo"
            container
            justifyContent={"center"}
            spacing={4}
          >
            <Grid item xs={12} lg={4} xl={3} md={6}>
              <div className="flex flex-col">
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
                    alt="logo"
                  />
                </div>
                <div className="mt-2">
                  <h6>NGUYỄN NHẬT</h6>
                  <p>Ceo TechViet Production</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} xl={3} md={6}>
              <div className="flex flex-col">
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="	https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg"
                    alt="logo"
                  />
                </div>

                <div>
                  <h6 className="mt-2">NGUYỄN NHẬT NAM</h6>
                  <p>Ceo TechViet Production</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} xl={3} md={6}>
              <div className="flex flex-col">
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg"
                    alt="logo"
                  />
                </div>
                <div>
                  <h6 className="mt-2">NGUYỄN NAM</h6>

                  <p>Ceo TechViet Production</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} xl={3} md={6}>
              <div className="flex flex-col">
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg"
                    alt="logo"
                  />
                </div>
                <div>
                  <h6 className="mt-2">JHONNY ĐẶNG</h6>

                  <p>Ceo TechViet Production</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} xl={3} md={6}>
              <div className="flex flex-col">
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg"
                    alt="logo"
                  />
                </div>
                <div>
                  <h6 className="mt-2">NGÔ HENRY</h6>

                  <p>Ceo TechViet Production</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} xl={3} md={6}>
              <div className="flex flex-col">
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="	https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
                    alt="logo"
                  />
                </div>
                <div>
                  <h6 className="mt-2">VƯƠNG PHẠM VN</h6>
                  <p>Ceo TechViet Production</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} xl={3} md={6}>
              <div className="flex flex-col">
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="		https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg"
                    alt="logo"
                  />
                </div>
                <div>
                  <h6 className="mt-2">ROBER IMACU</h6>
                  <p>Ceo TechViet Production</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} xl={3} md={6}>
              <div className="flex flex-col">
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="	https://demo2.cybersoft.edu.vn/static/media/instrutor12.90a80820.jpg"
                    alt="logo"
                  />
                </div>
                <div>
                  <h6 className="mt-2">KHOA PUG</h6>
                  <p>Ceo TechViet Production</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
      <ThemeProvider theme={theme}>
        <div className="lg:py-[100px] lg:px-[50px] xs:p-[50px]">
          <h6 className="text-center p-[20px] text-[30px] text-[#f6ba35] font-semibold uppercase md:text-[25px] xs:text-[20px] ">
            Nhà tài trợ chương trình
          </h6>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6} xl={3} className="text-center">
              <img
                className="xs:w-full  rounded-[8px] w-[400px] h-[220px]"
                src="https://demo2.cybersoft.edu.vn/static/media/meta.10fa2fa1.jpg"
                alt="logo"
              />
              <p className="uppercase text-[20px] font-medium">Facebook</p>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={3} className="text-center">
              <img
                className="xs:w-full  rounded-[8px] w-[400px] h-[220px]"
                src="https://demo2.cybersoft.edu.vn/static/media/microsoft.318b3280.jpg"
                alt="logo"
              />
              <p className="uppercase text-[20px] font-medium">MICROSOFT</p>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={3} className="text-center">
              <img
                className="xs:w-full  rounded-[8px] w-[400px] h-[220px]"
                src="https://demo2.cybersoft.edu.vn/static/media/Google-logo.f11902b5.jpg"
                alt="logo"
              />
              <p className="uppercase text-[20px] font-medium">GOOGLE</p>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={3} className="text-center">
              <img
                className="xs:w-full  rounded-[8px] w-[400px] h-[220px]"
                src="https://demo2.cybersoft.edu.vn/static/media/amazon.996890c4.jpg"
                alt="logo"
              />
              <p className="uppercase text-[20px] font-medium">AMAZON</p>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
}
