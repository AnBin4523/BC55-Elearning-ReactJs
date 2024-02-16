import { Fragment, ReactNode, useEffect, useState } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/type";
import { RootState } from "store";
import {
  actCancelRegistCourse,
  actConfirmUser,
  actFetchPendingUser,
  actFetchRegistCourse,
} from "../duck/action";
import { useParams } from "react-router-dom";
import { SortOrder } from "antd/lib/table/interface";

export default function RegistCourse() {
  const userData = JSON.parse(localStorage.getItem("USER_ADMIN") || "");
  const listUser = useSelector((state: RootState) => state.productReducer.data);
  const listPendingUser: any = useSelector(
    (state: RootState) => state.productReducer.courseEdit
  );
  const dispatch = useAppDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(actFetchRegistCourse({ maKhoaHoc: param.id }));
    dispatch(actFetchPendingUser({ maKhoaHoc: param.id }));
  }, []);

  const columns_1 = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      render: (text: any, object: any): JSX.Element => {
        return <span>{text}</span>;
      },
      sorter: (a: any, b: any) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"] as SortOrder[],
      width: "25%",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      render: (text: any, object: any): JSX.Element => {
        return <span>{text}</span>;
      },
      sorter: (a: any, b: any) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"] as SortOrder[],
      width: "25%",
    },
    {
      title: "Bí Danh",
      dataIndex: "biDanh",
      render: (text: any, object: any): JSX.Element => {
        return <span>{text}</span>;
      },
      sorter: (a: any, b: any) => {
        let biDanhA = a.biDanh.toLowerCase().trim();
        let biDanhB = b.biDanh.toLowerCase().trim();
        if (biDanhA > biDanhB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"] as SortOrder[],
      width: "25%",
    },
    {
      title: "Tùy Chỉnh",
      dataIndex: "tuyChinh",
      render: (text: any, user: any): JSX.Element => {
        return (
          <Fragment>
            <button
              className="btn btn-danger"
              onClick={() => {
                if (
                  window.confirm(
                    `Chắc là cho "${user.hoTen}" ra khỏi lớp chưa??? `
                  )
                ) {
                  dispatch(
                    actCancelRegistCourse(
                      { maKhoaHoc: param.id, taiKhoan: userData.taiKhoan },
                      { maKhoaHoc: param.id }
                    )
                  );
                }
              }}
            >
              Xóa
            </button>
          </Fragment>
        );
      },
      width: "25%",
    },
  ];

  const columns_2 = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      value: (text: any, object: any) => {
        return <span>{text}</span>;
      },
      sorter: (a: any, b: any) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"] as SortOrder[],
      width: "25%",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      value: (text: any, object: any) => {
        return <span>{text}</span>;
      },
      sorter: (a: any, b: any) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"] as SortOrder[],
      width: "25%",
    },

    {
      title: "Bí Danh",
      dataIndex: "biDanh",
      value: (text: any, object: any) => {
        return <span>{text}</span>;
      },

      sorter: (a: any, b: any) => {
        let biDanhA = a.biDanh.toLowerCase().trim();
        let biDanhB = b.biDanh.toLowerCase().trim();
        if (biDanhA > biDanhB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"] as SortOrder[],
      width: "25%",
    },

    {
      title: "Tùy Chỉnh",
      dataIndex: "tuyChinh",
      render: (text: any, user: any): ReactNode => {
        return (
          <Fragment>
            <button
              className="btn btn-success"
              onClick={() => {
                dispatch(
                  actConfirmUser(
                    { maKhoaHoc: param.id, taiKhoan: user.taiKhoan },
                    { maKhoaHoc: param.id }
                  )
                );
              }}
            >
              Xác Nhận
            </button>

            <button
              className="btn btn-danger"
              onClick={() => {
                if (
                  window.confirm(
                    `Chắc là cho "${user.hoTen}" ra khỏi lớp chưa??? `
                  )
                ) {
                  dispatch(
                    actCancelRegistCourse(
                      { maKhoaHoc: param.id, taiKhoan: user.taiKhoan },
                      { maKhoaHoc: param.id }
                    )
                  );
                }
              }}
            >
              Xóa
            </button>
          </Fragment>
        );
      },
      width: "25%",
    },
  ];

  const data_1 = listUser ? listUser : [];
  const data_2 = listPendingUser ? listPendingUser : [];

  return (
    <div className="container">
      <h1 className="text-warning text-center">Quản Lý Khóa Học</h1>
      <h1>Học sinh chờ xét duyệt</h1>
      <Table
        columns={columns_2}
        dataSource={data_2}
        rowKey={"taiKhoan"}
        pagination={{ pageSize: 5 }}
      />
      <h1>Danh sách học sinh trong lớp</h1>
      <Table columns={columns_1} dataSource={data_1} rowKey={"taiKhoan"} />
    </div>
  );
}
