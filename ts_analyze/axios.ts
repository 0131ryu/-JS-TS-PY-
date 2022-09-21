import axios, {Axios, AxiosError, AxiosResponse} from "axios";

interface Post  {userId: number, id: number, title: string, body: string}
interface Created {}
interface Data  {title: string, body: string, userId: 1}
(async () => {
  try {//현재 모든 타입이 any로 되어 있음
    const response = await axios.get<Post, AxiosResponse<Post>>(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    //post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    const response2 = await axios.post<Created, AxiosResponse<Created>, Data>('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
    console.log(response.data.id)
    console.log(response2) //const response2: AxiosResponse<Created, any>
  } catch (error) { 
    if(axios.isAxiosError(error)) { //커스텀 타입가드
        //{message: "서버 장애입니다. 다시 시도해주세요"}
        console.error((error.response as AxiosResponse<{message: string}>)?.data.message)
    }
  }
})();
