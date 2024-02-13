import React from "react";
import { DetailUser } from "type/type";
interface Props {
  item: DetailUser | null;
}
export default function TitleItem({ item }: Props) {
  return (
    <div className="card card-blur mb-4 rounded-[8px]">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Tài khoản </p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{item?.taiKhoan}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Họ và tên</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{item?.hoTen}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Email</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{item?.email}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Số điện thoại</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{item?.soDT}</p>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Mã nhóm </p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{item?.maNhom}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Đối tượng</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">Học viên</p>
          </div>
        </div>
      </div>
    </div>
  );
}
