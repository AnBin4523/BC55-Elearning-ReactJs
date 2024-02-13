import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useAppDispatch } from "store/type";
import { actFetchSearch } from "../HomePage/CourseList/duck/action";
import { useNavigate, useParams } from "react-router-dom";
import { Course } from "type/type";
import Product from "../Course/Product";

export default function Search() {
  const param = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dataCourse = useSelector(
    (state: RootState) => state.courseListReducer.data
  );

  useEffect(() => {
    dispatch(actFetchSearch(param.id, navigate));
  }, [param.id]);

  const renderItem = () => {
    return dataCourse?.map((item: Course) => {
      return <Product key={item.maKhoaHoc} item={item} />;
    });
  };

  return (
    <div style={{ padding: "0 50px" }}>
      <div className="row mt-4 pb-5">{renderItem()}</div>
    </div>
  );
}
