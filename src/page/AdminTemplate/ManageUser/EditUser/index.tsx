import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { RootState } from "store";
import { useAppDispatch } from "store/type";
import { actFetchEditUser, actUpdateUser } from "../duck/action";

export default function EditUser() {
  const dispatch = useAppDispatch();
  const userEdit: any = useSelector(
    (state: RootState) => state.userReducer.userEdit
  );
  const navigate: NavigateFunction = useNavigate();
  const param = useParams();

  useEffect(() => {
    dispatch(actFetchEditUser(param.id));
  }, []);

  const [state, setState] = useState({
    taiKhoan: userEdit?.taiKhoan,
    matKhau: userEdit?.matKhau,
    hoTen: userEdit?.hoTen,
    soDT: userEdit?.soDT,
    maLoaiNguoiDung: userEdit?.maLoaiNguoiDung,
    maNhom: "GP02",
    email: userEdit?.email,
  });

  const handleOnchange = (event: any) => {
    const { name, value } = event.target;
    setState({
      ...userEdit,
      maNhom: "GP02",
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(state);
    dispatch(actUpdateUser(state, navigate));
  };

  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-md-6 mx-auto alert alert-secondary p-4">
          <h1 className="text-center text-success">CẬP NHẬT NGƯỜI DÙNG</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="" className="font-weight-bolder text-warning">
                Tài Khoản
              </label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnchange}
                disabled
                defaultValue={userEdit?.taiKhoan || ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="font-weight-bolder text-warning">
                Mật Khẩu
              </label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnchange}
                defaultValue={userEdit?.matKhau || ""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="" className="font-weight-bolder text-warning">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={handleOnchange}
                defaultValue={userEdit?.email || ""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="" className="font-weight-bolder text-warning">
                Số điện thoại
              </label>
              <input
                type="number"
                className="form-control"
                name="soDT"
                onChange={handleOnchange}
                defaultValue={userEdit?.soDt || ""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="" className="font-weight-bolder text-warning">
                Mã loại người dùng
              </label>
              <select
                name="maLoaiNguoiDung"
                id=""
                className="form-control"
                onChange={handleOnchange}
                defaultValue={userEdit?.maLoaiNguoiDung === "HV" ? "HV" : "GV"}
              >
                <option value="HV ">Học viên</option>
                <option value="GV">Giáo vụ</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="" className="font-weight-bolder text-warning">
                Họ tên
              </label>
              <input
                type="text"
                className="form-control"
                name="hoTen"
                onChange={handleOnchange}
                defaultValue={userEdit?.hoTen || ""}
              />
            </div>
            <button className="btn btn-success pr-5 pl-5" type="submit">
              CẬP NHẬT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
