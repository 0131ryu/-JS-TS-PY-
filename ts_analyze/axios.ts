import axios, { AxiosResponse, AxiosError } from "axios";

interface Post {}
interface Created {}
interface Data {
  title: string;
  body: string;
  userId: number
}

interface Config<D = any> {
  method?: 'post' | 'get' |'put' | 'patch' | 'delete' | 'head' | 'options',
  url?: string,
  data?: D;
}
interface A {
  //응답 자체는 AxiosResponse
  //T = AxiosResponse.data
  get: <T, R = AxiosResponse<T>>(url: string) => Promise<R>,
  post: <T, R = AxiosResponse<T>, D = any>(url: string, data: D) => Promise<R>,
  (config: Config): void,
  (url: string, config:Config): void,
  isAxiosError: <T>(error: unknown) => error is AxiosError
}

const a: A = axios;
(async () => {
  try {
    const response = await a.get<Post, AxiosResponse<Post>>(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    //post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    const response2 = await a.post<Created, AxiosResponse<Created>, Data>('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
    //객체를 넣을 수 있는 함수
  const response3 = a({
    method: 'post', 
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  })
  //주소와 객체를 넣는 함수
  const response4 = a('https://jsonplaceholder.typicode.com/posts',{
    method: 'post', 
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  })
  } catch (error) { 
    if(a.isAxiosError(error)) { //커스텀 타입가드
        //{message: "서버 장애입니다. 다시 시도해주세요"}
        console.error((error.response as AxiosResponse<{message: string}>)?.data.message)
    }
  }
})();
