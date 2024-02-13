import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { useParams } from "react-router-dom";
import { actFetchCourseCategory } from "../duck/action";
import { Course } from "../../../../type/type";
import Product from "../Product";

export default function Template() {
  const dispatch: any = useDispatch();
  const courseCategory: any = useSelector(
    (state: RootState) => state.courseCategoryReducer.data
  );
  const param = useParams();

  useEffect(() => {
    dispatch(actFetchCourseCategory(param.id));
  }, []);

  const renderItem = () => {
    return courseCategory?.map((item: Course) => {
      return <Product key={item.maKhoaHoc} item={item} />;
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-success text-center">
        <i className="fas fa-desktop" />
        <span className="ml-2 listCourseTitle">Lập trình {param.id}</span>
      </h1>
      <div className="row mt-4">{renderItem()}</div>
    </div>
  );
}
