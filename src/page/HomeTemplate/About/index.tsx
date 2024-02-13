import styled from "@emotion/styled";
import Loader from "Loader";
import { useEffect, useState } from "react";

export default function About() {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStatus(false);
    }, 1000);
  }, []);
  const Wrapper = styled.div`
    background-image: url(https://demo2.cybersoft.edu.vn/static/media/bgAbout.19ac825c.png) !important;
    background-position: 50%;
    padding: 150px 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  `;
  const BgBlue = styled.div`
    background-image: url(https://demo2.cybersoft.edu.vn/static/media/solutions-hero-royalBlue-bg.e6aa17e0.svg) !important;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  `;
  const BgGreen = styled.div`
    background-image: url(https://demo2.cybersoft.edu.vn/static/media/solutions-hero-green-bg.15753edf.svg) !important;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  `;
  if (status) return <Loader color={"#f6ba35"} value={50} />;
  return (
    <div className="about">
      <Wrapper>
        <div className="p-[50px] text-center">
          <p className="text-[#41b294] text-[20px] uppercase font-medium">
            V learning học là vui{" "}
          </p>
          <h6 className="text-[#f6ba35] text-[40px]  font-semibold">
            Cùng nhau khám phá nhưng điều mới mẻ
          </h6>
          <p className="text-[18px] text-white  font-medium">
            Học đi đôi với hành
          </p>
        </div>
      </Wrapper>

      <div className="p-[50px]  grid-cols-1 gap-6 grid md:grid-cols-2 md:gap-0 about-item">
        <div>
          <h6>V learning ?</h6>
          <h5>Nơi hội tụ kiến thức</h5>
          <p className="md:text-[16px] text-[12px]">
            Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ
            trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây
            dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một
            lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn
            diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học
            trực tuyến thú vị và hấp dẫn.
          </p>
        </div>
        <BgGreen>
          <img
            className="w-100 h-[382px] object-contain "
            src="https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png"
            alt="logo"
          />
        </BgGreen>
      </div>

      <div className="p-[50px] grid-cols-1 gap-6 grid md:grid-cols-2 md:gap-0 about-item">
        <BgBlue className="order-last md:order-1">
          <img
            className="w-100 h-[382px] object-contain "
            src="https://demo2.cybersoft.edu.vn/static/media/education-hero.62147e5c.png"
            alt="logo"
          />
        </BgBlue>
        <div className="md:order-2">
          <h6>Chương trình học V learning</h6>
          <h5>Hệ thống học hàng đầu</h5>
          <p className="md:text-[16px] text-[12px]">
            Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên của
            các trường đại học danh tiếng trong thành phố: Đại học CNTT, KHTN,
            Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học máy
            lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành trên
            một máy riêng.100% các buổi học đều là thực hành trên máy tính. Đào
            tạo với tiêu chí: “học để làm được việc”, mang lại cho học viên
            những kiến thức hữu ích nhất, sát với thực tế nhất.
          </p>
        </div>
      </div>
      <div className="p-[50px] grid-cols-1 gap-6 grid md:grid-cols-2 md:gap-0 about-item">
        <div>
          <h6>TẦM NHÌN V LEARNING</h6>
          <h5>Đào tạo lập trình chuyên sâu</h5>
          <p className="md:text-[16px] text-[12px]">
            Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu
            khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự
            phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện
            nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành
            cường quốc về phát triển phần mềm.giúp người học phát triển cả tư
            duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng
            đáp ứng mọi nhu cầu của doanh nghiệp.
          </p>
        </div>
        <BgGreen>
          <img
            className="w-100 h-[382px] object-contain "
            src="	https://demo2.cybersoft.edu.vn/static/media/olstudy.96378086.png"
            alt="logo"
          />
        </BgGreen>
      </div>
      <div className="p-[50px] grid-cols-1 gap-6 grid md:grid-cols-2 md:gap-0 about-item">
        <BgBlue className="order-last md:order-1">
          <img
            className="w-100 h-[382px] object-contain "
            src="	https://demo2.cybersoft.edu.vn/static/media/students.fc2d9ab7.png"
            alt="logo"
          />
        </BgBlue>
        <div className="md:order-2">
          <h6>Sứ mệnh V learning</h6>
          <h5>Phương pháp đào tạo hiện đại</h5>
          <p className="md:text-[16px] text-[12px]">
            Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền tảng
            công nghệ giáo dục, kết hợp phương pháp truyền thống, phương pháp
            trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực tế,
            phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ các
            công ty, doanh nghiệp. Qua đó, V learning giúp người học phát triển
            cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn
            sàng đáp ứng mọi nhu cầu của doanh nghiệp.
          </p>
        </div>
      </div>
    </div>
  );
}
