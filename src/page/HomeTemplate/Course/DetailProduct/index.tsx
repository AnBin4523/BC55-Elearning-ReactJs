import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  actClearNote,
  actFetchDetailCourse,
  actGetRegisterCourse,
} from "./duck/action";
import { NotificationType, RegisterCourse, User } from "../../../../type/type";
import { ConfigProvider, notification } from "antd";
import { useAppDispatch, useAppSelector } from "../../../../store/type";

export default function DetailProduct() {
  const dispatch = useAppDispatch();
  const product: any = useAppSelector(
    (state) => state.detaiProductReducer.detailProduct.data
  );
  const param = useParams();
  const { registerCourse } = useAppSelector(
    (state) => state.detaiProductReducer
  );
  const [api, contextHolder] = notification.useNotification();
  useEffect(() => {
    dispatch(actFetchDetailCourse(param.id));
    return () => {
      dispatch(actClearNote());
    };
  }, []);
  useEffect(() => {
    if (registerCourse.error) {
      openNotification("Bạn đã đăng ký khoá học này rồi", "error");
    } else if (registerCourse.data) {
      openNotification(registerCourse.data, "success");
    }
  }, [registerCourse.data || registerCourse.error]);

  const openNotification = (value: string, type: NotificationType) => {
    api[type]({
      message: "Thông báo",
      description: value,
      placement: "bottomRight",
    });
  };
  const getRegisterCourse = () => {
    if (localStorage.getItem("USER_CUSTOMER")) {
      let value: User = JSON.parse(localStorage.getItem("USER_CUSTOMER") || "");
      let result: RegisterCourse = {
        taiKhoan: value.taiKhoan,
        maKhoaHoc: param?.id || "",
      };
      dispatch(actGetRegisterCourse(result));
    } else {
      openNotification(
        "Vui lòng đăng nhập để thực hiện chức năng này",
        "warning"
      );
    }
  };
  return (
    <section className="detailCouresContent">
      <ConfigProvider
        theme={{
          token: {
            /* here is your global tokens */
            colorInfo: "#41b294",
          },
        }}
      >
        {contextHolder}
      </ConfigProvider>
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <h1 className="titleDetailCourse">Lập Trình {product?.tenKhoaHoc}</h1>
          <div className="row p-3">
            <div className="col-lg-4">
              <div className="detailCourseIntro">
                <img
                  src={require("../../../../Image/instrutor5.2e4bd1e6.jpg")}
                  alt=""
                />
                <div className="pl-1 pr-1">
                  <p>Giảng Viên</p>
                  <p>Mark Zuckerberg</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="detailCourseIntro">
                <i className="fas fa-graduation-cap"></i>
                <div className="pl-1 pr-1">
                  <p>Lĩnh Vực</p>
                  <p>{product?.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="detailCourseIntro">
                <div className="pl-1 pr-1">
                  <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>5 sao
                  </div>
                  <p className="pt-2">{product?.luotXem} Lượt Xem</p>
                </div>
              </div>
            </div>
          </div>
          <p className="textDiscripts">
            React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng
            và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản
            ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản,
            từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá
            rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng
            cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình
            diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị
            hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa
            học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại
            sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc
            "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với
            tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng
            giải thích TẠI SAO điều đó lại quan trọng!
          </p>
          <div className="p-4 boxCourseLearn">
            <h3>Những gì bạn sẽ học </h3>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện
                      với người dùng và phản ứng nhanh
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Đăng ký công việc được trả lương cao hoặc làm freelancer
                      trong một trong những lĩnh vực được yêu cầu nhiều nhất mà
                      bạn có thể tìm thấy trong web dev ngay bây giờ
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận
                      dụng sức mạnh của JavaScript một cách dễ dàng
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Tìm hiểu tất cả về React Hooks và React Components
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-6">
                <ul>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp
                      Javascript NPM, Webpack, Babel và ES6 / ES2015
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Nhận ra sức mạnh của việc xây dựng các thành phần có thể
                      kết hợp
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi
                      người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>
                      Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các
                      ứng dụng Redux
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="courseContent">
            <h6>Nội dung khóa học</h6>
            <div className="courseDetailContent">
              <div className="sectionCourse">
                <span>Mục 1: Giới thiệu</span>
                <button className=" btnPreview">Xem trước</button>
              </div>
              <p className="p-3">Bài học</p>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>Các khái niệm về React
                  Component
                </span>
                <span>
                  <i className="fas fa-clock"></i>14:35
                </span>
              </div>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>Thiết lập môi trường cho
                  Windows
                </span>
                <span>
                  <i className="fas fa-clock"></i>20:40
                </span>
              </div>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>Tạo ứng dụng React -
                  React-Scripts
                </span>
                <span>
                  <i className="fas fa-clock"></i>15:00
                </span>
              </div>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>Ghi chú nhanh về dấu
                  ngoặc kép cho string interpolation
                </span>
                <span>
                  <i className="fas fa-clock"></i>30:00
                </span>
              </div>
            </div>

            <div className="courseDetailContent">
              <div className="sectionCourse">
                <span>MỤC 2: KIẾN THỨC CĂN BẢN</span>
                <button className=" btnPreview">Xem trước</button>
              </div>
              <p className="p-3">Bài học</p>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>Trang chủ và thành phần
                  thư mục
                </span>
                <span>
                  <i className="fas fa-clock"></i>45:56
                </span>
              </div>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>Hướng dẫn khóa học +
                  Liên kết Github
                </span>
                <span>
                  <i className="fas fa-clock"></i>10:09
                </span>
              </div>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>Trang chủ thương mại
                  điện tử + thiết lập SASS
                </span>
                <span>
                  <i className="fas fa-clock"></i>15:23
                </span>
              </div>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>Tệp CSS và SCSS
                </span>
                <span>
                  <i className="fas fa-clock"></i>32:00
                </span>
              </div>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>React 17: Cập nhật các
                  gói + Phiên bản React mới nhất
                </span>
                <span>
                  <i className="fas fa-clock"></i>56:00
                </span>
              </div>
            </div>

            <div className="courseDetailContent">
              <div className="sectionCourse">
                <span>MỤC 3: KIẾN THỨC CHUYÊN SÂU</span>
                <button className=" btnPreview">Xem trước</button>
              </div>
              <p className="p-3">Bài học</p>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>connect() and
                  mapStateToProps
                </span>
                <span>
                  <i className="fas fa-clock"></i>27:00
                </span>
              </div>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>Trạng thái thư mục vào
                  Redux
                </span>
                <span>
                  <i className="fas fa-clock"></i>29:09
                </span>
              </div>
              <div className="lessonContent mt-1">
                <span>
                  <i className="fas fa-play-circle"></i>Thành phần Tổng quan về
                  Bộ sưu tập
                </span>
                <span>
                  <i className="fas fa-clock"></i>39:35
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-5">
          <div className="sideBarCourseDetail">
            <img src={product?.hinhAnh} alt="" />
            <div className="coursePrice">
              <p>
                <i className="fas fa-bolt"></i>500.000<sup>đ</sup>
              </p>
            </div>
            <button className=" btnPreview" onClick={getRegisterCourse}>
              Đăng ký
            </button>
            <div className="sideBarDetailContent">
              <ul>
                <li>
                  <p>
                    Ghi danh:<span> {product?.soLuongHocVien} học viên</span>
                  </p>
                  <i className="fas fa-user-graduate "></i>
                </li>
                <li>
                  <p>
                    Thời gian: <span> 18 giờ</span>
                  </p>
                  <i className="far fa-clock far fa-calendar-alt"></i>
                </li>
                <li>
                  <p>
                    Bài học:<span> 10</span>
                  </p>
                  <i className="fas fa-book"></i>
                </li>
                <li>
                  <p>
                    Video:<span> 14</span>
                  </p>
                  <i className="fas fa-photo-video"></i>
                </li>
                <li>
                  <p>
                    Trình độ:<span> Người mới bắt đầu</span>
                  </p>
                  <i className="fas fa-database"></i>
                </li>
              </ul>
            </div>

            <form action="" className="formCoupon">
              <input type="text" placeholder="Nhập mã" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
