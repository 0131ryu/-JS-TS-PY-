//declare : 함수 선언만 하고 실제 코드는 다른 곳에 위치
declare function add(x: number, y: number): number
declare function add(x: number, y: number, z: number): number

add(1, 2);
add(2, 3, 4);

//한 방에 타이핑 하고 싶을 때
//(위의 코드와 같은 내용) 그럴 때 옵셔널 사용
declare function add(x: number, y: number, z?: number): number

add(1, 2);
add(2, 3, 4);


//오버로딩은 모든 케이스가 다 되도록 -> 여러 개 중 하나에 걸리게 함
declare function add(x: number, y: number): number
declare function add(x: number, y: number, z: number): number
declare function add(x: string, y: string): string

add(1, 2);
add(2, 3, 4);
add('1', '2');


//interface
interface Add {
    (x: number, y: number): number;
    (x: string, y: string): string;
}
//오버로딩 하면 실제 구현부에서는 any 사용 가능
const add2: Add = (x: any, y: any) => x + y;


//class
class ADD {
    add (x: number, y: number): number;
    add (x: string, y: string): string;
    //위의 두 add만 오버로딩, 아래 any는 무시됨
    add(x: any, y: any) {
        return x + y;
    }
}

const addResult = new ADD().add(1, 2); //숫자면 add (x: number, y: number): number;
const ADDRESULT = new ADD().add('1', '2'); //문자면 add (x: string, y: string): string;