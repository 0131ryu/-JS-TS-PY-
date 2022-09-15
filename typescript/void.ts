function a4(): void {
    // return 3; //오류
    return undefined
    //return null; //오류
}

const b4 = a4()

//매개변수로 선언한 void과 리턴값이 void
function a5(callback: () => void) : void {

}
a5(() => {
    return '3'
})

//메서드가 void
interface Human2 {
    talk: () => void
}

const human2: Human2 = {
    talk() {return 'abc'}
}

declare function forEach(arr: number[], callback: (el: number) => void): void;

const target: number[] = [];
forEach([1, 2, 3], el => target.push(el))