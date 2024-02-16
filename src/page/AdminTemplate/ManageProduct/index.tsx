import { Fragment, ReactElement, ReactNode, useEffect } from "react";
import { Table, Input } from "antd";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../store";
import { actFetchListCourse } from "../../HomeTemplate/HomePage/CourseList/duck/action";
import { actDeleteCourse } from "./duck/action";
import { useAppDispatch } from "../../../store/type";
import { ColumnType, SortOrder } from "antd/lib/table/interface";

const { Search } = Input;

export default function DashBoard() {
  const arrCourse: any = useSelector(
    (state: RootState) => state.courseListReducer.data
  );
  const dispatch = useAppDispatch();

  const onSearch = (value: any) => {
    console.log(value);
    dispatch(actFetchListCourse(value));
  };

  useEffect(() => {
    dispatch(actFetchListCourse());
  }, []);

  // const columns = [
  //   {
  //     title: "Mã Khóa Học",
  //     dataIndex: "maKhoaHoc",
  //     value: (text: any, object: any) => {
  //       return <span>{text}</span>;
  //     },

  //     sorter: (a: any, b: any) => {
  //       let maKhoaHocA = a.maKhoaHoc.toLowerCase().trim();
  //       let maKhoaHocB = b.maKhoaHoc.toLowerCase().trim();
  //       if (maKhoaHocA > maKhoaHocB) {
  //         return 1;
  //       }
  //       return -1;
  //     },
  //     sortDirections: ["descend", "ascend"],
  //     width: "15%",
  //   },
  //   {
  //     title: "Danh Mục",
  //     dataIndex: "danhMucKhoaHoc",
  //     // value:(text: any,object: any)=>{return <span>{text.tenDanhMucKhoaHoc}</span>},
  //     render: (item: any) => Object.values(item)[1],
  //     sorter: (a: any, b: any) => {
  //       let maDanhMucKhoahocA = a.danhMucKhoaHoc.maDanhMucKhoahoc
  //         .toLowerCase()
  //         .trim();
  //       let maDanhMucKhoahocB = b.danhMucKhoaHoc.maDanhMucKhoahoc
  //         .toLowerCase()
  //         .trim();
  //       if (maDanhMucKhoahocA > maDanhMucKhoahocB) {
  //         return 1;
  //       }
  //       return -1;
  //     },
  //     sortDirections: ["descend", "ascend"],
  //     width: "15%",
  //   },
  //   {
  //     title: "Hình Ảnh",
  //     dataIndex: "hinhAnh",
  //     render: (text: any, course: any) => {
  //       return (
  //         <Fragment>
  //           <img
  //             src={course.hinhAnh}
  //             alt={course.tenPhim}
  //             width={50}
  //             height={50}
  //           />
  //         </Fragment>
  //       );
  //     },
  //     width: "15%",
  //   },
  //   {
  //     title: "Tên Khóa Học",
  //     dataIndex: "tenKhoaHoc",
  //     sorter: (a: any, b: any) => {
  //       let tenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
  //       let tenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
  //       if (tenKhoaHocA > tenKhoaHocB) {
  //         return 1;
  //       }
  //       return -1;
  //     },
  //     sortDirections: ["descend", "ascend"],
  //     width: "15%",
  //   },

  //   {
  //     title: "Mô Tả",
  //     dataIndex: "moTa",
  //     render: (text: any, course: any) => {
  //       return (
  //         <Fragment>
  //           {course.moTa.length > 50
  //             ? course.moTa.substr(0, 50) + "..."
  //             : course.moTa}
  //         </Fragment>
  //       );
  //     },
  //     width: "15%",
  //   },

  //   {
  //     title: "Tùy Chỉnh",
  //     dataIndex: "tuyChinh",
  //     render: (text: any, course: any) => {
  //       return (
  //         <Fragment>
  //           <NavLink to={`/admin/ghidanh-sanpham/${course.maKhoaHoc}`}>
  //             <button className="btn btn-warning">Ghi Danh</button>
  //           </NavLink>
  //           <NavLink to={`/admin/chinhsua-sanpham/${course.maKhoaHoc}`}>
  //             <button className="btn btn-info">Sửa</button>
  //           </NavLink>

  //           <button
  //             className="btn btn-danger"
  //             onClick={() => {
  //               if (
  //                 window.confirm(
  //                   `Chắc là muốn xóa khóa học "${course.maKhoaHoc}" dữ chưa??? `
  //                 )
  //               ) {
  //                 dispatch(actDeleteCourse(course.maKhoaHoc));
  //               }
  //             }}
  //           >
  //             Xóa
  //           </button>
  //         </Fragment>
  //       );
  //     },
  //     width: "25%",
  //   },
  // ];

  const columns: ColumnType<any>[] = [
    {
      title: "Mã Khóa Học",
      dataIndex: "maKhoaHoc",
      render: (text: any) => <span>{text}</span>,
      sorter: (a: any, b: any) => a.maKhoaHoc.localeCompare(b.maKhoaHoc),
      sortDirections: ["descend", "ascend"] as SortOrder[],
      width: "15%",
    },
    {
      title: "Danh Mục",
      dataIndex: "danhMucKhoaHoc",
      render: (item: any): any => Object.values(item)[1],
      sorter: (a: any, b: any) => a.danhMucKhoaHoc.localeCompare(b.danhMucKhoaHoc),
      sortDirections: ["descend", "ascend"] as SortOrder[],
      width: "15%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text: any, course: any) => (
        <Fragment>
          <img src={course.hinhAnh} alt={course.tenPhim} width={50} height={50} />
        </Fragment>
      ),
      width: "15%",
    },
    {
      title: "Tên Khóa Học",
      dataIndex: "tenKhoaHoc",
      sorter: (a: any, b: any) => a.tenKhoaHoc.localeCompare(b.tenKhoaHoc),
      sortDirections: ["descend", "ascend"] as SortOrder[],
      width: "15%",
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      render: (text: any, course: any) => (
        <Fragment>
          {course.moTa.length > 50 ? course.moTa.substr(0, 50) + "..." : course.moTa}
        </Fragment>
      ),
      width: "15%",
    },
    {
      title: "Tùy Chỉnh",
      dataIndex: "tuyChinh",
      render: (text: any, course: any) => (
        <Fragment>
          <NavLink to={`/admin/ghidanh-sanpham/${course.maKhoaHoc}`}>
            <button className="btn btn-warning">Ghi Danh</button>
          </NavLink>
          <NavLink to={`/admin/chinhsua-sanpham/${course.maKhoaHoc}`}>
            <button className="btn btn-info">Sửa</button>
          </NavLink>
          <button
            className="btn btn-danger"
            onClick={() => {
              if (
                window.confirm(
                  `Chắc là muốn xóa khóa học "${course.maKhoaHoc}" dữ chưa??? `
                )
              ) {
                dispatch(actDeleteCourse(course.maKhoaHoc));
              }
            }}
          >
            Xóa
          </button>
        </Fragment>
      ),
      width: "25%",
    },
  ];

  const data = arrCourse ? arrCourse : [];

  const onChange = (
    pagination: any,
    filters: any,
    sorter: any,
    extra: any
  ) => {};

  return (
    <div className="container">
      <h1 className="text-warning text-center">Quản Lý Khóa Học</h1>
      <NavLink to="/admin/them-sanpham">
        <button className="btn btn-success mb-2">Thêm Khóa Học</button>
      </NavLink>

      <Search
        className="mb-2"
        placeholder="Tìm kiếm theo tên khóa học"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maKhoaHoc"}
      />
    </div>
  );
}
