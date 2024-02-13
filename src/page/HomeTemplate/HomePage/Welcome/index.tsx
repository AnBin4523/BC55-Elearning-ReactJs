import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
export default function Welcome() {
  return (
    <div className="px-[50px] welcome">
      <div className="grid gap-12 grid-cols-1 xl:grid-cols-2 xl:gap-0 ">
        <div className="welcome-left flex justify-center items-center relative">
          <div className="angle"></div>
          <div className="small-box small-box-top-left"></div>
          <div className="small-box small-box-bottom-right"></div>
          <div className="small-box small-box-top-right"></div>
          <div className="welcome-left-title">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInLeft"
            >
              <div>
                <img
                  className="object-cover absolute right-[20%] top-[20%] w-[180px] h-[180px]"
                  src="https://demo2.cybersoft.edu.vn/static/media/paper_plane.93dfdbf5.png"
                  alt="logo"
                />
              </div>
              <h1>Chào mừng</h1>
              <h1>đến với môi trường</h1>
              <h1>
                V<span>learning</span>
              </h1>
              <button className="bg-[#f6ba35] transition-all delay-100 hover:scale-95 text-white font-bold py-2 px-4 rounded mt-4">
                Bắt đâu nào
              </button>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="welcome-right relative">
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeInRight"
          >
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/slider2.f170197b.png"
              alt="logo"
            />
            <img
              className="slide-clound1 slide-img "
              src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
              alt="logo"
            />
            <img
              className="slide-clound2 slide-img "
              src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
              alt="logo"
            />
            <img
              className="slide-clound3 slide-img "
              src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png"
              alt="logo"
            />
            <img
              className="slide-message slide-img "
              src="https://demo2.cybersoft.edu.vn/static/media/message_slider.6835c478.png"
              alt="logo"
            />
            <img
              className="slide-codeImg slide-img "
              src="	https://demo2.cybersoft.edu.vn/static/media/code_slider.8c12bbb4.png"
              alt="logo"
            />
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}
