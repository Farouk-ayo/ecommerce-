import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const pathname = useLocation();
  console.log(pathname);
  console.log("yes");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
};

export default ScrollToTop;
