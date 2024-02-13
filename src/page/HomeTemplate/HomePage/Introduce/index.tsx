import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import axios from "axios";
import { Rating } from "@mui/material";
import { Teacher } from "../../../../type/type";

export default function Introduce() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios({
      url: "https://64709e3a3de51400f724a087.mockapi.io/Teacher",
      method: "GET",
    })
      .then((result) => {
        setState(result.data);
      })
      .catch((error) => {});
  }, []);
  const renderSlide = () => {
    return state?.map((item: Teacher, index) => {
      return (
        <SwiperSlide key={index} className="text-center">
          <div className="slider-content xs:mx-auto md:ml-3 w-5/6 rounded-md transition-all py-4">
            <div>
              <img src={item.hinhAnh} alt="logo" />
              <h6 className="font-medium mb-1">{item.ten}</h6>
            </div>
            <div>
              <p>{item.linhVuc}</p>
              <p>{item.ngonNgu}</p>
              <div className="flex justify-center items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={5}
                  precision={0.5}
                  readOnly
                ></Rating>
                <span className="text-yellow-300 font-medium">
                  {item.danhGia}
                </span>
              </div>
              <span className="text-xs text-gray-400">
                {item.soLuongDanhGia}
              </span>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <div className="px-12 mt-5">
      <h6 className="font-medium">Giảng viên hàng đầu</h6>
      <div className="introduce">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <Swiper
            className=" mt-4"
            spaceBetween={0}
            breakpoints={{
              400: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            grid={{
              rows: 1,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Grid]}
          >
            {renderSlide()}
          </Swiper>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
