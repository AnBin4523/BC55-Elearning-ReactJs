import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/type";
import {
  actAcceptWaittingCourse,
  actCourseRegisted,
  actDenyCourseRegisted,
  actWaittingCourse,
} from "./duck/action";
import { RegistedCourse } from "type/type";

export default function AdminCourse() {
  const param = useParams();
  const dispatch = useAppDispatch();
  const { state, state2 } = useAppSelector(
    (state) => state.registedCourseReducer
  );

  useEffect(() => {
    dispatch(actWaittingCourse({ taiKhoan: param.id }));
    dispatch(actCourseRegisted({ taiKhoan: param.id }));
  }, []);

  const renderWaittingCourse = () => {
    const columns: ColumnsType<RegistedCourse> = [
      {
        title: "Tên khoá học",
        dataIndex: "tenKhoaHoc",
        fixed: true,
        width: 150,
        filters: state2.data?.map((item) => {
          return {
            value: item.tenKhoaHoc,
            text: item.tenKhoaHoc,
          };
        }),
        // specify the condition of filtering result
        // here is that finding the name started with `value`

        onFilter: (value: any, record) =>
          record.tenKhoaHoc.indexOf(value) === 0,
        sorter: (a, b) => {
          let TenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
          let TenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
          if (TenKhoaHocA < TenKhoaHocB) {
            return 1;
          }
          return -1;
        },
        sortDirections: ["descend"],
      },
      {
        title: "Mã khoá học",
        dataIndex: "maKhoaHoc",
        defaultSortOrder: "descend",
        width: 50,
      },
      {
        title: "Hành động",
        dataIndex: "hanhDong",
        width: 100,
      },
    ];
    let course = state2.data?.map((item, index) => {
      return {
        key: index,
        tenKhoaHoc: item.tenKhoaHoc,
        maKhoaHoc: item.maKhoaHoc,
        hanhDong: (
          <div className="flex gap-3 text-base">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              onClick={() => {
                if (window.confirm("Bạn có chắc muốn xoá khoá học này ?")) {
                  let value = {
                    maKhoaHoc: item.maKhoaHoc,
                    taiKhoan: param.id || "",
                  };
                  dispatch(actDenyCourseRegisted(value));
                }
              }}
            >
              Xoá
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
              onClick={() => {
                let value = {
                  maKhoaHoc: item.maKhoaHoc,
                  taiKhoan: param.id || "",
                };
                dispatch(actAcceptWaittingCourse(value));
              }}
            >
              Xác nhận
            </button>
          </div>
        ),
      };
    });
    return (
      <Table
        columns={columns}
        dataSource={course}
        scroll={{
          x: 800,
        }}
      />
    );
  };
  const renderRegistedCourse = () => {
    const columns: ColumnsType<RegistedCourse> = [
      {
        title: "Tên khoá học",
        dataIndex: "tenKhoaHoc",
        fixed: true,
        width: 150,
        filters: state.data?.map((item) => {
          return {
            value: item.tenKhoaHoc,
            text: item.tenKhoaHoc,
          };
        }),
        // specify the condition of filtering result
        // here is that finding the name started with `value`

        onFilter: (value: any, record) =>
          record.tenKhoaHoc.indexOf(value) === 0,
        sorter: (a, b) => {
          let TenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
          let TenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
          if (TenKhoaHocA < TenKhoaHocB) {
            return 1;
          }
          return -1;
        },
        sortDirections: ["descend"],
      },
      {
        title: "Mã khoá học",
        dataIndex: "maKhoaHoc",
        defaultSortOrder: "descend",
        width: 50,
      },
      {
        title: "Hành động",
        dataIndex: "hanhDong",
        width: 100,
      },
    ];
    let course = state.data?.map((item, index) => {
      return {
        key: index,
        tenKhoaHoc: item.tenKhoaHoc,
        maKhoaHoc: item.maKhoaHoc,
        hanhDong: (
          <div className="flex gap-3 text-base">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              onClick={() => {
                if (window.confirm("Bạn có chắc muốn xoá khoá học này ?")) {
                  let value = {
                    maKhoaHoc: item.maKhoaHoc,
                    taiKhoan: param.id || "",
                  };
                  dispatch(actDenyCourseRegisted(value));
                }
              }}
            >
              Xoá
            </button>
          </div>
        ),
      };
    });
    return (
      <Table
        columns={columns}
        dataSource={course}
        scroll={{
          x: 800,
        }}
      />
    );
  };
  return (
    <div>
      <h3 className="text-[36px] font-semibold text-center">
        Quản lý khoá học
      </h3>

      <h5 className="text-[22px] font-semibold my-4">Khoá học chờ xét duyệt</h5>
      {renderWaittingCourse()}
      <h5 className="text-[22px] font-semibold my-4">Khoá học đã ghi danh</h5>
      {renderRegistedCourse()}
    </div>
  );
}
