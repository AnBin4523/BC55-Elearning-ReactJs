import React from "react";
import ReactLoading from "react-loading";

const Loader: any = ({ value, color }: any) => (
  <div className="bg-[#fff] min-h-screen min-w-[100vw] relative">
    <ReactLoading
      type={"spinningBubbles"}
      color={color}
      height={value}
      width={value}
      className="absolute bottom-1/2 left1/2 right-1/2 translate-x-1/2 translate-y-1/2"
    />
  </div>
);

export default Loader;
