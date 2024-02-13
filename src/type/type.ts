export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type SelectEvent = React.ChangeEvent<HTMLSelectElement>;
export interface AppState<T> {
  loading: boolean;
  data: T[] | null;
  error: any;
}
export interface AppStateAcount<T> {
  loading: boolean;
  data: T | null;
  error: any;
}

export interface Action {
  type: string;
  payload?: any;
}
export interface ResultAcount<T> {
  data: T;
  status: number;
  statusText: string;
}
export interface Result<T> {
  data: T[];
  status: number;
  statusText: string;
}
export interface Error {
  response: {
    data: string;
    status: number;
    statusText: string;
  };
}

export interface Course {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  danhGia?: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: string;
  danhMucKhoaHoc: {
    maDanhMucKhoahoc: string;
    tenDanhMucKhoaHoc: string;
  };
}

export interface User {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  email: string;
}

export interface Teacher {
  ten: string;
  linhVuc: string;
  ngonNgu: string;
  hinhAnh: string;
  danhGia: number;
  soLuongDanhGia: string;
  id: number | string;
}

export interface Date {
  days: undefined | string;
  hours: undefined | string;
  minutes: undefined | string;
  seconds: undefined | string;
}

export interface SignUp {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  email: string;
}
export interface Login {
  taiKhoan: string;
  matKhau: string;
}

export interface DataAuth {
  taiKhoan: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  hoTen: string;
  accessToken: string;
}

export interface DetailUser {
  chiTietKhoaHocGhiDanh: [];
  email: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  matKhau: string;
  soDT: string;
  taiKhoan: string;
}

export interface RegisterCourse {
  maKhoaHoc: string;
  taiKhoan: string;
}
export interface DetailCourse {
  biDanh: string;
  danhGia: number;
  hinhAnh: string;
  luotXem: number;
  maKhoaHoc: string;
  moTa: string;
  ngayTao: string;
  tenKhoaHoc: string;
  gia: number;
}

export interface RegistedCourse {
  maKhoaHoc: string;
  tenKhoaHoc: string;
}
export interface ComfirmCourse {
  maKhoaHoc: string;
  taiKhoan: string;
}

export interface StateCourse<T> {
  state: {
    loading: boolean;
    data: T[] | [];
    error: any;
  };
  state2: {
    loading: boolean;
    data: T[] | null;
    error: any;
  };
}
export interface Animate {
  html: number;
  css: number;
  js: number;
  react: number;
}

export type NotificationType = "success" | "info" | "warning" | "error";
