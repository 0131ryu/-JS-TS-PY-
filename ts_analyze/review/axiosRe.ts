import axios, {AxiosResponse} from "axios";

interface G { userId: number, id: number, title: string, body: string } 
interface P {}
interface data { title: string, body: string, userId: 1 }
interface P {}
interface data2 { id: number, title: string, body: string, userId: number }
interface PA {}
interface data3 { title : string }
interface D {}

(async () => {//getResponse, getResponse2 둘 다 상관 없음
  try {
    // get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    // post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    // put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    // patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

    // delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
   
    const aGet = await axios.get<G, AxiosResponse<G>>('https://jsonplaceholder.typicode.com/posts/1')
    const aPost = await axios.post<P, AxiosResponse<P>, data>('https://jsonplaceholder.typicode.com/posts/1', 
    { title: 'foo', body: 'bar', userId: 1})
    const aPut = await axios.put<P, AxiosResponse<P>, data2>('https://jsonplaceholder.typicode.com/posts/1', 
    { id: 1, title: 'foo', body: 'bar', userId: 1,})
    const aPatch = await axios.patch<PA,AxiosResponse<PA>, data3>('https://jsonplaceholder.typicode.com/posts/1', {title: 'foo'})
    const aDelete = await axios.delete<D, AxiosResponse<D>>('https://jsonplaceholder.typicode.com/posts/1')

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

