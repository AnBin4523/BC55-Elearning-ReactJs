import { NavLink } from "react-router-dom";
import { CategoryType } from "../duck/type";
import "../../../../Image/app-development-concept-illustration_114360-5164.png";

export interface PropsCategory {
  category: CategoryType;
  img?: string;
}

export default function CategoryItem({ category, img }: PropsCategory) {
  return (
    <NavLink
      to={`/danhmuckhoahoc/${category.maDanhMuc}`}
      className="categoryItem col-md-6 col-xl-4 col-6"
    >
      <img src={img} alt="" />
      <p>{category.tenDanhMuc}</p>
    </NavLink>
  );
}
