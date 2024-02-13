import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "store/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { DetailCourse, RegisterCourse } from "../../../../type/type";
import { actDeleteCourse } from "../duck/action";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Link } from "react-router-dom";
import { Popconfirm } from "antd";
interface Props {
  item: DetailCourse;
  value: RegisterCourse;
}

export default function SwiperItem({ item, value }: Props) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOk = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      setOpen(false);
      dispatch(actDeleteCourse(value));
    }, 1000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="slider-content xs:mx-auto md:ml-3 w-5/6 rounded-md transition-all py-4 flex flex-col lg:flex-row lg:mb-[20px]  gap-6 ">
        <div>
          <img
            className="w-[400px] h-[250px] object-fill rounded-[8px] shadow-md"
            src={item.hinhAnh}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://www.makeforum.org/wp-content/uploads/2021/04/ngon-ngu-lap-trinh-850x415.png";
            }}
            alt="logo"
          />
        </div>
        <div className=" text-left">
          <Link
            to={`/chitiet/${item.maKhoaHoc}`}
            className="font-medium mb-2 text-[22px] hover:text-[#f6ba35]"
          >
            {item.tenKhoaHoc}
          </Link>
          <p className="text-gray-400 mb-2">
            {item.moTa.length > 30
              ? item.moTa.substr(0, 100) + "..."
              : item.moTa}
          </p>
          <div className="flex gap-2 items-center mb-2    ">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-[#f5c002] w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              8 giờ
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-[#f06f68] w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              23 giờ
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-[#65c9ff] w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              All level
            </div>
          </div>
          <div className="mb-2">
            <Rating
              name="half-rating-read"
              defaultValue={5}
              precision={0.5}
              readOnly
            ></Rating>
          </div>
          <Popconfirm
            title="Thông báo"
            description="Bạn có  muốn huỷ khoá học này ?"
            okType="danger"
            open={open}
            onConfirm={handleOk}
            okButtonProps={{ loading }}
            onCancel={handleCancel}
          >
            <button
              className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-600"
              onClick={() => setOpen(true)}
            >
              Huỷ đăng ký
            </button>
          </Popconfirm>
        </div>
      </div>
    </>
  );
}
