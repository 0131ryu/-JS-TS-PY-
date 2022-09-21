import axios, {AxiosResponse} from "axios";

interface Post {userId: number, id: number, title: string, body: string} 
interface Created {} //post 요청에 대한 응답의 데이터 타입
interface Data  {title: string, body: string, userId: 1}

(async () => {//getResponse, getResponse2 둘 다 상관 없음
  try {
    // get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    const getResponse = await axios.get<Post>(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const getResponse2 = await axios.get<Post, AxiosResponse<Post>>(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const getResponse3 = await axios.post<Created, AxiosResponse<Created>, Data>('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
    console.log(getResponse); //const response: AxiosResponse<Post, any>
    console.log(getResponse2.data.id) //(property) AxiosResponse<Post, any>.data: Post
    console.log(getResponse3) //
  } catch (error) {
     //isAxiosError(payload: any): payload is AxiosError;
     if(axios.isAxiosError(error)) {
        console.error(error.response?.data)
     }
  } 
})();

