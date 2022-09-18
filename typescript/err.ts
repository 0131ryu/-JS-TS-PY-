interface Axios {
    get(): void;
}
class CustomError extends Error {
    response?: {
        data: any;
    }
}
declare const axios: Axios;

(async () => {
    try {
        await axios.get();
    } catch(err) { 
        //err instanceof CustomError(타입가드) 있기 전 err는 unknown이었으나 있으면 커스텀 에러로 좁혀짐 
        //타입가드로 범위 좁혀놨으면 as 사용하지 않아도 됨
        if(err instanceof CustomError) { 
        //as를 붙이는 건 사람이 함 = 실수 있을 수 있음
        // const customError = err as CustomError 
        console.error(err.response?.data);
        err.response?.data
        }
    }   
})();