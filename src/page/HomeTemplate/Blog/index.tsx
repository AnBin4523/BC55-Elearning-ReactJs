import { Grid, ThemeProvider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { theme } from "./../index";
import { useEffect, useState } from "react";
import Loader from "Loader";

export default function Blog() {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStatus(false);
    }, 1000);
  }, []);
  if (status) return <Loader color={"#f6ba35"} value={50} />;
  return (
    <div>
      <div className="p-[50px] uppercase bg-[#ffd60a] text-white">
        <h3 className="text-[28px] font-medium">Blog</h3>
        <p>Thông tin công nghệ số!!!</p>
      </div>
      <div className="px-[50px] py-[20px] mb-[20px]">
        <h6 className="py-[20px]">
          <span>
            <CampaignOutlinedIcon className="text-[#ed85ab]  mr-2" />
          </span>{" "}
          PHÙ HỢP VỚI BẠN
        </h6>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xl={6} lg={12}>
                  <Card>
                    <CardContent>
                      <img
                        className="h-[302px] object-fill w-full rounded-[8px]"
                        src="https://sanfactory.vn/wp-content/uploads/2023/02/tranh-dong-luc-san-tr48-8.jpg"
                        alt="logo"
                      />
                      <Typography variant="h6" className="!my-[10px]">
                        Thời gian và động lực
                      </Typography>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="mr-2 text-[#41b294]">
                            <ThumbUpOffAltIcon />
                            300
                          </span>
                          <span className="mr-2 text-[#41b294]">
                            <ChatBubbleOutlineIcon />
                            500
                          </span>
                          <span className="text-[#41b294]">
                            <VisibilityIcon />
                            200
                          </span>
                        </div>
                        <p>
                          Đăng bởi{" "}
                          <span className="text-[#ed85ab]"> Jhony Đặng</span>
                        </p>
                      </div>
                      <div>
                        <Typography
                          variant="body2"
                          className="!my-[10px] line-clamp-2"
                        >
                          Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được
                          gọi là "timetable". Hay dân dã hơn thì người ta hay
                          gọi là "Lịch thường nhật",...
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions>
                      <button className="bg-[#f6ba35] transition-all delay-100 hover:scale-95 text-white font-bold py-2 px-4 rounded mt-4 uppercase">
                        Xem thêm
                      </button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xl={6} lg={12}>
                  <Card>
                    <CardContent>
                      <img
                        className="h-[302px] object-fill w-full rounded-[8px]"
                        src="https://statics.cdn.200lab.io/2023/04/huong-dan-cai-dat-tailwind-css-co-ban.png"
                        alt="logo"
                      />
                      <Typography variant="h6" className="!my-[10px]">
                        Tailwind CSS
                      </Typography>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="mr-2 text-[#41b294]">
                            <ThumbUpOffAltIcon />
                            300
                          </span>
                          <span className="mr-2 text-[#41b294]">
                            <ChatBubbleOutlineIcon />
                            500
                          </span>
                          <span className="text-[#41b294]">
                            <VisibilityIcon />
                            200
                          </span>
                        </div>
                        <p>
                          Đăng bởi{" "}
                          <span className="text-[#ed85ab]"> Jhony Đặng</span>
                        </p>
                      </div>
                      <div>
                        <Typography
                          variant="body2"
                          className="!my-[10px]  line-clamp-2"
                        >
                          Được dịch từ tiếng Anh-Tailwind CSS là một khung CSS
                          mã nguồn mở. Tính năng chính của thư viện này là,
                          không giống như các khung CSS khác như Bootstrap, nó
                          không cung cấp một loạt các lớp được xác định trước
                          cho các thành phần như nút hoặc bảng.
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions>
                      <button className="bg-[#f6ba35] transition-all delay-100 hover:scale-95 text-white font-bold py-2 px-4 rounded mt-4 uppercase">
                        Xem thêm
                      </button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xl={6} lg={12}>
                  <Card>
                    <CardContent>
                      <img
                        className="h-[302px] object-fill w-full rounded-[8px]"
                        src="https://resources.iostream.vn/content/article/html-phan-1-co-ban-ve-html/thumbnail-hd/blob-1598602790106@1280x720.jpg"
                        alt="logo"
                      />
                      <Typography variant="h6" className="!my-[10px]">
                        HTML
                      </Typography>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="mr-2 text-[#41b294]">
                            <ThumbUpOffAltIcon />
                            300
                          </span>
                          <span className="mr-2 text-[#41b294]">
                            <ChatBubbleOutlineIcon />
                            500
                          </span>
                          <span className="text-[#41b294]">
                            <VisibilityIcon />
                            200
                          </span>
                        </div>
                        <p>
                          Đăng bởi{" "}
                          <span className="text-[#ed85ab]"> Jhony Đặng</span>
                        </p>
                      </div>
                      <div>
                        <Typography
                          variant="body2"
                          className="!my-[10px] line-clamp-2"
                        >
                          HTML là một ngôn ngữ đánh dấu được thiết kế ra để tạo
                          nên các trang web trên World Wide Web. Nó có thể được
                          trợ giúp bởi các công nghệ như CSS và các ngôn ngữ
                          kịch bản giống như JavaScript.
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions>
                      <button className="bg-[#f6ba35] transition-all delay-100 hover:scale-95 text-white font-bold py-2 px-4 rounded mt-4 uppercase">
                        Xem thêm
                      </button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xl={6} lg={12}>
                  <Card>
                    <CardContent>
                      <img
                        className="h-[302px] object-fill w-full rounded-[8px]"
                        src="https://networksynapse.net/wp-content/uploads/2020/07/mui.png"
                        alt="logo"
                      />
                      <Typography variant="h6" className="!my-[10px]">
                        Material Design
                      </Typography>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="mr-2 text-[#41b294]">
                            <ThumbUpOffAltIcon />
                            300
                          </span>
                          <span className="mr-2 text-[#41b294]">
                            <ChatBubbleOutlineIcon />
                            500
                          </span>
                          <span className="text-[#41b294]">
                            <VisibilityIcon />
                            200
                          </span>
                        </div>
                        <p>
                          Đăng bởi{" "}
                          <span className="text-[#ed85ab]"> Jhony Đặng</span>
                        </p>
                      </div>
                      <div>
                        <Typography
                          variant="body2"
                          className="!my-[10px] line-clamp-2"
                        >
                          Material Design là một ngôn ngữ thiết kế được phát
                          triển vào năm 2014 bởi Google. Mở rộng dựa trên mô típ
                          "thẻ" có mặt trên Google Now, Material Design đem đến
                          phong cách tự do hơn với các cách bố trí dạng lưới,
                          các phản hồi hoạt họa chuyển động, kéo giãn, và các
                          hiệu ứng chiều sâu như ánh sáng và đổ bóng.
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions>
                      <button className="bg-[#f6ba35] transition-all delay-100 hover:scale-95 text-white font-bold py-2 px-4 rounded mt-4 uppercase">
                        Xem thêm
                      </button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xl={6} lg={12}>
                  <Card>
                    <CardContent>
                      <img
                        className="h-[302px] object-fill w-full rounded-[8px]"
                        src="https://miro.medium.com/v2/resize:fit:480/1*MGcLJS1ZvMFcBA94PXn16Q.png"
                        alt="logo"
                      />
                      <Typography variant="h6" className="!my-[10px]">
                        Visual Studio Code
                      </Typography>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="mr-2 text-[#41b294]">
                            <ThumbUpOffAltIcon />
                            300
                          </span>
                          <span className="mr-2 text-[#41b294]">
                            <ChatBubbleOutlineIcon />
                            500
                          </span>
                          <span className="text-[#41b294]">
                            <VisibilityIcon />
                            200
                          </span>
                        </div>
                        <p>
                          Đăng bởi{" "}
                          <span className="text-[#ed85ab]"> Jhony Đặng</span>
                        </p>
                      </div>
                      <div>
                        <Typography
                          variant="body2"
                          className="!my-[10px] line-clamp-2"
                        >
                          Visual Studio Code là một trình soạn thảo mã nguồn
                          được phát triển bởi Microsoft dành cho Windows, Linux
                          và macOS. Nó hỗ trợ chức năng debug, đi kèm với Git,
                          có chức năng nổi bật cú pháp, tự hoàn thành mã thông
                          minh, snippets, và cải tiến mã nguồn.
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions>
                      <button className="bg-[#f6ba35] transition-all delay-100 hover:scale-95 text-white font-bold py-2 px-4 rounded mt-4 uppercase">
                        Xem thêm
                      </button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="border-solid border-[#d0d0d0] border-[1px] border-t-[3px] mb-[30px]">
                <h6 className="text-center border-solid border-b-2 border-[#d0d0d0] py-[10px]">
                  Các chủ đề được đề xuất
                </h6>
                <ul>
                  <li className="px-[20px] py-[10px]">
                    Front-end / Mobile apps
                  </li>
                  <li className="px-[20px] py-[10px]">UI / UX / Design</li>
                  <li className="px-[20px] py-[10px]">BACK-END</li>
                  <li className="px-[20px] py-[10px]">Thư viện</li>
                  <li className="px-[20px] py-[10px]">
                    Chia sẻ người trong nghề
                  </li>
                  <li className="px-[20px] py-[10px]">Châm ngôn IT</li>
                  <li className="px-[20px] py-[10px]">Chủ đề khác</li>
                </ul>
              </div>
              <div className="border-solid border-[#d0d0d0] border-[1px] border-t-[3px]">
                <h6 className="text-center border-solid border-b-2 border-[#d0d0d0] py-[10px]">
                  Bài đăng được đề xuất
                </h6>
                <div className="p-[20px] mb-[20px]">
                  <h6 className="mb-[10px] font-medium">
                    Routing trong reactjs
                  </h6>
                  <p className="text-[#8c8c8c] mb-[10px]">
                    Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px] object-cover rounded-full mr-2"
                      src="	https://demo2.cybersoft.edu.vn/static/media/instrutor13.0159beae.jpg"
                      alt="logo"
                    />
                    <span className="text-[#8c8c8c]"> Nguyên Văn</span>
                  </div>
                </div>
                <div className="p-[20px] mb-[20px]">
                  <h6 className="mb-[10px] font-medium">
                    Lập trình hướng đối tượng oop
                  </h6>
                  <p className="text-[#8c8c8c] mb-[10px]">
                    Chúng ta sẽ cùng nhau tìm hiểu cách oop trong reactjs...
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px] object-cover rounded-full mr-2"
                      src="	https://demo2.cybersoft.edu.vn/static/media/instrutor12.90a80820.jpg"
                      alt="logo"
                    />
                    <span className="text-[#8c8c8c]"> Nguyên Văn Vũ</span>
                  </div>
                </div>
                <div className="p-[20px] mb-[20px]">
                  <h6 className="mb-[10px] font-medium">
                    Xử Lý Bất Đồng Bộ Trong Javascript
                  </h6>
                  <p className="text-[#8c8c8c] mb-[10px]">
                    Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời
                    gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi
                    file,...). Và đây...
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px] object-cover rounded-full mr-2"
                      src="		https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg"
                      alt="logo"
                    />
                    <span className="text-[#8c8c8c]"> Nguyên Minh</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </div>
  );
}
