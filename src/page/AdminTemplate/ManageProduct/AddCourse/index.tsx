import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DatePicker, Form, Input, InputNumber, Radio, Select } from "antd";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../../store/type";
import { actAddCourse } from "../duck/action";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { actFetchCategory } from "../../../HomeTemplate/Category/duck/action";
import { RootState } from "../../../../store";
import dayjs from "dayjs";
import { SizeType } from "antd/es/config-provider/SizeContext";

export default function AddCourse() {
  const [componentSize, setComponentSize] = useState<SizeType>("middle");
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const [imgSrc, setImgSrc] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const dataDanhMucKhoaHoc: any = useSelector(
    (state: RootState) => state.categoryReducer.data
  );
  const userData = JSON.parse(localStorage.getItem("USER_ADMIN") || "");

  useEffect(() => {
    dispatch(actFetchCategory());
  }, []);

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: userData.taiKhoan,
    },
    onSubmit: (value: any) => {
      value.maNhom = "GP01";
      let formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("tenKhoaHoc", value.tenKhoaHoc);

      dispatch(actAddCourse(value, formData, navigate));
    },
  });

  const handleChangeDatePicker = (value: any) => {
    let ngayTao = dayjs(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", ngayTao);
  };

  const handleChangeInputNumber = (name: any) => {
    return (value: any) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (event: any) => {
    let file = event.target.files[0];
    if (file) {
      if (
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg"
      ) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          if (event.target) {
            // Kiểm tra event.target có tồn tại
            setImgSrc(event.target.result as string);
          }
        };
        formik.setFieldValue("hinhAnh", file.name);
      }
      setSelectedFile(file);
    }
  };

  const handleChangeDanhMuc = (value: any) => {
    formik.setFieldValue("maDanhMucKhoaHoc", value);
  };

  const selectDanhMuc = () => {
    return dataDanhMucKhoaHoc?.map((item: any, index: any) => {
      return { label: item.tenDanhMuc, value: item.maDanhMuc };
    });
  };

  return (
    <div className="container">
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 1200,
        }}
      >
        <h1 className="text-warning text-center pb-3">Thêm Mới Khóa Học</h1>
        <div className="d-flex justify-content-center">
          <div className="pr-5">
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Mã Khóa Học">
              <Input name="maKhoaHoc" onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Bí Danh">
              <Input name="biDanh" onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Tên Khóa Học">
              <Input name="tenKhoaHoc" onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Mô Tả">
              <Input name="moTa" onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Lượt Xem">
              <InputNumber
                type="number"
                onChange={handleChangeInputNumber("luotXem")}
                min={1}
                max={1000000}
              />
            </Form.Item>

            <Form.Item label="Đánh Giá">
              <InputNumber
                type="number"
                onChange={handleChangeInputNumber("danhGia")}
                min={1}
                max={10}
              />
            </Form.Item>
          </div>
          <div className="border border-warning border-top-0 border-right-0 border-bottom-0">
            <Form.Item label="Ngày Tạo">
              <DatePicker
                name="ngayTao"
                format={"DD/MM/YYYY"}
                onChange={handleChangeDatePicker}
              />
            </Form.Item>

            <Form.Item label="Danh Mục">
              <Select
                defaultValue="BackEnd"
                onChange={handleChangeDanhMuc}
                options={selectDanhMuc()}
              />
            </Form.Item>

            <Form.Item label="Hình Ảnh">
              <input
                type="file"
                onChange={handleChangeFile}
                accept="image/png, image/jpeg, image/gif, image/jpg"
              />
              <br />
              <img src={imgSrc} alt="1" style={{ width: 150, height: 150 }} />
            </Form.Item>
          </div>
        </div>

        <div className="text-center ">
          <button type="submit" className="btn btn-warning">
            SUBMIT
          </button>
        </div>
      </Form>
    </div>
  );
}
