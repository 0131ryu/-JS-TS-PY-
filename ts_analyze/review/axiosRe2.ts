import axios, {AxiosResponse, AxiosError} from "axios";

interface G { userId: number, id: number, title: string, body: string } 
interface P {}
interface data { title: string, body: string, userId: 1 }
interface P {}
interface data2 { id: number, title: string, body: string, userId: number }
interface PA {}
interface data3 { title : string }
interface D {}

// get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
// post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
// put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
// patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
// delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
//isAxiosError(payload: any): payload is AxiosError;

// export class AxiosError<T = unknown, D = any> extends Error {
//     constructor(
//       message?: string,
//       code?: string,
//       config?: AxiosRequestConfig<D>,
//       request?: any,
//       response?: AxiosResponse<T, D>
//     );

interface Config<D = any> {
    method?: 'post' | 'get' |'put' | 'patch' | 'delete',
    url?: string,
    data?: D
}

interface AX {
    // R = AxiosResponse<T> 넣어도 그만 안 넣어도 그만
    // D는 필수 -> 선택으로 변경하고 싶으면? 기본값으로 변경하고 싶은 경우 D = any 사용 
    get: <T, R = AxiosResponse<T>>(url: string) => Promise<R>,
    post: <T, R = AxiosResponse<T>, D = any>(url: string, data?: D) => Promise<R>,
    put: <T, R=AxiosResponse<T>, D = any>(url: string, data?: D) => Promise<R>,
    patch: <T, R=AxiosResponse<T>, D = any>(url: string, data?: D) => Promise<R>,
    delete: <T, R = AxiosResponse<T>>(url: string) => Promise<R>,
    (config: Config): void,
    (url: string, config: Config): void
    isAxiosError: <T>(error: unknown) => error is AxiosError 
}

const ax: AX = axios;
(async () => {//getResponse, getResponse2 둘 다 상관 없음
  try {
    const aGet = await ax.get<G, AxiosResponse<G>>('https://jsonplaceholder.typicode.com/posts/1')
    const aPost = await ax.post<P, AxiosResponse<P>, data>('https://jsonplaceholder.typicode.com/posts/1', 
    { title: 'foo', body: 'bar', userId: 1})
    const aPut = await ax.put<P, AxiosResponse<P>, data2>('https://jsonplaceholder.typicode.com/posts/1', 
    { id: 1, title: 'foo', body: 'bar', userId: 1,})
    const aPatch = await ax.patch<PA,AxiosResponse<PA>, data3>('https://jsonplaceholder.typicode.com/posts/1', {title: 'foo'})
    const aDelete = await ax.delete<D, AxiosResponse<D>>('https://jsonplaceholder.typicode.com/posts/1')

    console.log(aGet.data.id);
    console.log(aPost);
    console.log(aPut);
    console.log(aPatch);
    console.log(aDelete);
  } catch (error) {
    //isAxiosError(payload: any): payload is AxiosError;
    if(axios.isAxiosError(error)) {
       console.error(error.response?.data)
    }
  }
})();

