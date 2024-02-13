import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useEffect, useState } from "react";
import { actFetchCategory } from "./duck/action";
import CategoryItem from "./CategoryItem";
import { useAppDispatch } from "../../../store/type";
import Loader from "Loader";

export default function Category() {
  const [status, setStatus] = useState(true);

  const dispatch = useAppDispatch();
  const category: any = useSelector(
    (state: RootState) => state.categoryReducer.data
  );

  useEffect(() => {
    dispatch(actFetchCategory());
    setTimeout(() => {
      setStatus(false);
    }, 1000);
  }, []);

  const renderCategory = () => {
    return category?.map((item: any, n: number) => {
      return (
        <CategoryItem key={item.maDanhMuc} category={item} img={arrayImg[n]} />
      );
    });
  };

  const arrayImg = [
    "https://img.freepik.com/premium-vector/back-end-development-concept_277904-11497.jpg?w=2000",

    "https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=1380&t=st=1693650114~exp=1693650714~hmac=6989150e81c8b762dd249b5c477990d2a0ac03053524793334be824dbfc464b4",

    "https://img.freepik.com/free-vector/charity-app-concept_23-2148608518.jpg?w=1060&t=st=1693650173~exp=1693650773~hmac=0275436b816cc605e11ec8846c60c78517c2fff2a569234570a708bb5fd0725c",

    "https://img.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-2357.jpg?w=900&t=st=1693650231~exp=1693650831~hmac=8dbc9e41ad592e527f85d3fea28cc78a45f63e530ac4bf913a2ae7bb6c3b623a",

    "https://img.freepik.com/premium-vector/full-stack-developer-working-computer-it-professional-programmer-coding-website-creation-proccess-computer-technology_277904-5495.jpg?w=2000",

    "https://img.freepik.com/premium-vector/programmer-is-thinking-about-program-code-development-programming-coding-technologies_569013-329.jpg?w=2000",
  ];
  if (status) return <Loader color={"#f6ba35"} value={50} />;

  return (
    <section className="category">
      <div className="bannerCategory">
        <img
          src={require("../../../Image/career-development-banner-with-kid-designer-leader_107791-6480.png")}
          alt=""
        />
        <div className="bannerContent text-center">
          <h1 className=" pt-5">
            Hỗ trợ phát triển sự nghiệp lập trình của bạn!
          </h1>
          <p>Lựa chọn khóa học theo sở thích.</p>
        </div>
      </div>
      <div className="categoryContent row">{renderCategory()}</div>
    </section>
  );
}
