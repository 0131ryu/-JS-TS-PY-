function book(x: string | number): number {
    return +x;
}

book('1'); //1

type Book = (x: string) => string | number;
const shelf: Book = book;

let A = 5;

let test: string | number = 5

//타입가드 : 타입 좁히기
if (typeof test === "string") {
    console.log("이건 문자열",a)
} else if (typeof test === "number") {
    console.log("이건 숫자", a)
}