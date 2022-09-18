// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// type Exclude<T, U> = T extends U ? never : T;
// type Extract<T, U> = T extends U ? T : never;

interface Profile {
    name: string,
    age: number,
    married: boolean
}

const zerocho2: Profile = {
    name: "zerocho",
    age: 29,
    married: false
}

const newZeroCho: Partial<Profile> = {
    name: "zerocho",
    age: 29
}

type P<T> = {
    //어떤 객체가 오든지 그 객체의 키를 아래에 씀
    //아래의 자리에는 name, age, marreid가 옴  = 옵셔널로 만듦
    [Key in keyof T]?: T[Key];
}
const newZeroCho2: P<Profile> = {
    name: "zerocho",
    age: 29
}

const newZeroCho3: Pick<Profile, 'name' | 'age'> = {
    name: "zerocho",
    age: 29
}

//Omit : Profile에서 married만 제외
const newZeroCho4: Omit<Profile, "married"> = {
    name: "zerocho",
    age: 29
}

//Pick
type PI<T, S extends keyof T> = {
    [Key in S]: T[Key];
}

const newZeroCho5: PI<Profile, 'name' | 'age'> = {
    name: "zerocho",
    age: 29
}

//Omit
type O<T, S extends keyof any> = Pick<T,  Exclude<keyof T, S>>

const newZeroCho6: O<Profile, "married"> = {
    name: "zerocho",
    age: 29
}