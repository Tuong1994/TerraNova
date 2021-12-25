import React from "react";

const useReveal = (ref: any, setTrigger: any) => {
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (ref.current) {
        const offsetTop = ref.current.offsetTop - 400;
        const offsetHeight = ref.current.offsetHeight;
        if (scrollY > offsetTop && scrollY < offsetTop + offsetHeight) {
          setTrigger(true);
        }
      } else {
        setTrigger(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
};

export default useReveal;
