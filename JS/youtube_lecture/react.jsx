import { useCallback } from "react";

export const App = () => {
  const onClick = useCallback((e) => {
    console.log(e.target);
  }, []);

  return (
    //오류
    // <div onClick={onClick()}></div>
    //<div onClick={undefined}></div>;
    //맞는 답
    <div onClick={onClick}></div>
  );
};
