import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DatePicker, Form, Input, InputNumber, Radio, Select } from "antd";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../../store/type";
import { actFetchEditCourse, actUpdateCourse } from "../duck/action";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../../store";
import dayjs from "dayjs";
import { actFetchCategory } from "../../../HomeTemplate/Category/duck/action";
import { SizeType } from "antd/es/config-provider/SizeContext";

export default function EditCourse() {
  const [componentSize, setComponentSize] = useState<SizeType>("middle");
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const param = useParams();
  const [imgSrc, setImgSrc] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const dataEdit: any = useSelector(
    (state: RootState) => state.productReducer.courseEdit
  );
  const dataDanhMucKhoaHoc: any = useSelector(
    (state: RootState) => state.categoryReducer.data
  );
  const userData = JSON.parse(localStorage.getItem("USER_ADMIN") || "");
  console.log(dataEdit?.danhMucKhoaHoc.maDanhMucKhoahoc);

  useEffect(() => {
    dispatch(actFetchCategory());
    dispatch(actFetchEditCourse(param.id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: dataEdit?.maKhoaHoc,
      biDanh: dataEdit?.biDanh,
      tenKhoaHoc: dataEdit?.tenKhoaHoc,
      moTa: dataEdit?.moTa,
      luotXem: dataEdit?.luotXem,
      danhGia: 10,
      hinhAnh: dataEdit?.hinhAnh,
      maNhom: "GP01",
      ngayTao: dataEdit?.ngayTao,
      maDanhMucKhoaHoc: dataEdit?.danhMucKhoaHoc.maDanhMucKhoahoc,
      taiKhoanNguoiTao: userData.taiKhoan,
    },
    onSubmit: (value: any) => {
      console.log(value);

      let formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("tenKhoaHoc", value.tenKhoaHoc);

      dispatch(actUpdateCourse(value, formData, navigate));
    },
  });

  const handleChangeDatePicker = (value: any) => {
    let ngayTao = dayjs(value);
    formik.setFieldValue("ngayTao", ngayTao);
    console.log(value);
  };

  const handleChangeInputNumber = (name: any) => {
    return (value: any) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (event: any) => {
    let file = event.target.files[0];
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/jpg"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        setImgSrc(event.target.result);
      };
      formik.setFieldValue("hinhAnh", file.name);
    }
    setSelectedFile(file);
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
        <h1 className="text-success text-center pb-3">Chỉnh sửa Khóa Học</h1>
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
              <Input
                name="maKhoaHoc"
                onChange={formik.handleChange}
                value={formik.values.maKhoaHoc}
              />
            </Form.Item>

            <Form.Item label="Bí Danh">
              <Input
                name="biDanh"
                onChange={formik.handleChange}
                value={formik.values.biDanh}
              />
            </Form.Item>

            <Form.Item label="Tên Khóa Học">
              <Input
                name="tenKhoaHoc"
                onChange={formik.handleChange}
                value={formik.values.tenKhoaHoc}
              />
            </Form.Item>

            <Form.Item label="Mô Tả">
              <Input
                name="moTa"
                onChange={formik.handleChange}
                value={formik.values.moTa}
              />
            </Form.Item>

            <Form.Item label="Lượt Xem">
              <InputNumber
                type="number"
                onChange={handleChangeInputNumber("luotXem")}
                min={1}
                max={1000000}
                value={formik.values.luotXem}
              />
            </Form.Item>

            <Form.Item label="Đánh Giá">
              <InputNumber
                type="number"
                onChange={handleChangeInputNumber("danhGia")}
                min={1}
                max={10}
                value={formik.values.danhGia}
              />
            </Form.Item>
          </div>
          <div className="border border-warning border-top-0 border-right-0 border-bottom-0">
            <Form.Item label="Ngày Tạo">
              <Input
                value={formik.values.ngayTao}
                onChange={handleChangeDatePicker}
              />
            </Form.Item>

            <Form.Item label="Danh Mục">
              <Select
                defaultValue={formik.values.maDanhMucKhoaHoc}
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
              <img
                src={imgSrc === "" ? dataEdit?.hinhAnh : imgSrc}
                alt="1"
                style={{ width: 150, height: 150 }}
              />
            </Form.Item>
          </div>
        </div>

        <div className="text-center ">
          <button type="submit" className="btn btn-success text-dark">
            SUBMIT
          </button>
        </div>
      </Form>
    </div>
  );
}
