import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { useAppDispatch } from "store/type";
import { actAddUser } from "../duck/action";
import { NavigateFunction, useNavigate } from "react-router";

export default function AddUser() {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  // const error = useSelector((state : RootState)=>state.userReducer.data);

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "HV",
    maNhom: "GP02",
    email: "",
  });

  const handleOnchange = (event: any) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(state);
    dispatch(actAddUser(state, navigate));
  };

  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-md-6 mx-auto alert alert-secondary p-4">
          <h1 className="text-center">THÊM NGƯỜI DÙNG</h1>

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
              />
            </div>

            <div className="form-group">
              <label htmlFor="" className="font-weight-bolder text-warning">
                Số điện thoại
              </label>
              <input
                type="text"
                className="form-control"
                name="soDT"
                onChange={handleOnchange}
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
              />
            </div>
            <button className="btn btn-warning">THÊM MỚI</button>
            {/* {error && (<div className='alert alert-danger'>${error?.response.data}. Vui lòng thay đổi!</div>)} */}
          </form>
        </div>
      </div>
    </div>
  );
}
