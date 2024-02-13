import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "@emotion/styled";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const Button = styled.div`
    position: fixed;
    width: 40px;
    height: 40px;
    right: 20px;
    bottom: 20px;
    font-size: 3rem;
    z-index: 100;
    cursor: pointer;
    visibility: ${visible ? "visible" : "hidden"};
  `;
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = window.scrollY;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button>
      <span
        className="absolute top-0 w-full h-full rounded-lg"
        onClick={scrollToTop}
        style={{
          display: visible ? "inline-block" : "none",
          backgroundColor: "#41b294",
        }}
      >
        <KeyboardArrowUpIcon className="text-white absolute top-2/4 bottom-2/4  transform translate-x-1/3   -translate-y-2/4" />
      </span>
    </Button>
  );
}
