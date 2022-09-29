import { useRef, useEffect } from "react";

// const [isRunning, setRunning] = useState(true);
// useInterval(
//   () => {
//     console.log("hello");
//   },
//   isRunning ? 1000 : null
// );

//delay를 null로 만들면 interval이 멈춤
function useInterval(callback, delay) {
  const saveCallback = useRef();

  useEffect(() => {
    saveCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      saveCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay); //callback을 넣으면 그대로 옛날코드 실행
      return () => clearInterval(id);
    }
  }, [delay]);
  return saveCallback.current;
}
export default useInterval;

//1초 뒤에 가위
//1.1초 뒤에 changeHand
//2초 뒤에 바위
//2.1초 뒤에 changeHand
//3초 뒤의 보
