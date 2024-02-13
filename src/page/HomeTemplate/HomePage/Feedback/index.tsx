import { AnimationOnScroll } from "react-animation-on-scroll";

export default function FeedBack() {
  return (
    <div className="py-[20px] px-[50px] mt-5 relative">
      <div className="feed-back py-12  relative">
        <div className="angle"></div>
        <div className="small-box small-box-top-left"></div>
        <div className="small-box small-box-bottom-left"></div>
        <div className="small-box small-box-top-right"></div>
        <div className="small-box small-box-bottom-right"></div>
        <div className="feed-back-content grid md:grid-cols-2 xs:grid-cols-1 w-full">
          <div className="content-left relative flex justify-center  sm:mt-0 md:mt-12">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInLeft"
            >
              <div className="bg-img"></div>

              <div className="z-10 relative">
                <img
                  width={200}
                  height={200}
                  src="https://demo2.cybersoft.edu.vn/static/media/avatarReview.2f5a1f3c.png"
                  alt="logo"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="content-right pt-3">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInRight"
            >
              <p className="text-[17px] leading-[30px] font-medium">
                Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
                trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
                được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên
                sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp
                dẫn
              </p>
              <p>Nhi Dev</p>
              <span>Học viên xuất sắc</span>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
