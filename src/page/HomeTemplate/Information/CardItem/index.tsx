import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Animate, DetailUser } from "../../../../type/type";
interface Props {
  item: DetailUser | null;
}
export default function CardItem({ item }: Props) {
  const navigate = useNavigate();
  const [state, setState] = useState<Animate>({
    html: 0,
    css: 0,
    js: 0,
    react: 0,
  });
  const conicColors = { "0%": "#108ee9", "100%": "#87d068" };
  useEffect(() => {
    let count: number = 0;
    const animate = setInterval(() => {
      if (count < 100) {
        count++;
        setState({
          html: count,
          css: count - 20,
          js: count - 30,
          react: count - 22,
        });
      } else {
        clearInterval(animate);
      }
    }, 30);
  }, []);

  return (
    <div>
      <div className="card card-blur mb-4 rounded-[8px]">
        <div className="card-body text-center">
          <div>
            <span className="inline-block">
              {" "}
              <img
                className="w-[60px] h-[60px] rounded-full object-cover"
                src="	https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
                alt="logo"
              />
            </span>
            <h5 className="my-3">{item?.hoTen}</h5>
            <p className="text-muted mb-1">{item?.soDT}</p>
            <p className="text-muted mb-4">{item?.email}</p>
          </div>

          <div className="d-flex justify-content-center mb-2">
            <button
              className="btn btn-primary flex"
              onClick={() => {
                navigate("/thong-tin-ca-nhan/chinh-sua", { replace: false });
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Chỉnh sửa
            </button>
          </div>
        </div>
      </div>
      <div className="card card-blur mb-4 mb-lg-0 rounded-[8px]">
        <div className="card-body md:p-5 max-sm:p-4 progress-custom">
          <div className="flex justify-between xs:flex-wrap xs: gap-6 xs:justify-center  max-[400px]:flex-wrap max-[400px]:gap-6  max-[400px]:justify-center">
            <Progress
              size={80}
              format={() => (
                <span className="text-[14px] max-sm:text-[12px] font-medium text-black">
                  HTML
                </span>
              )}
              type="circle"
              percent={state.html}
              strokeColor={conicColors}
            />
            <Progress
              size={80}
              format={() => (
                <span className="text-[14px] max-sm:text-[12px] font-medium text-black">
                  CSS
                </span>
              )}
              type="circle"
              percent={state.css}
              strokeColor={conicColors}
            />
            <Progress
              size={80}
              format={() => (
                <span className="text-[14px] max-sm:text-[12px] font-medium text-black">
                  Javascript
                </span>
              )}
              type="circle"
              percent={state.js}
              strokeColor={conicColors}
            />
            <Progress
              size={80}
              format={() => (
                <span className="text-[14px] max-sm:text-[12px] font-medium text-black">
                  React
                </span>
              )}
              type="circle"
              percent={state.react}
              strokeColor={conicColors}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
