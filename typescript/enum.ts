const enum EDirection {
    Up = 3,
    Down = 5,
    Left = 4,
    Right = 6
}
// const a = EDirection.Up; //3
// const c = EDirection.Left //4

function walk(dir: EDirection) {}

const oDirection = {
    Up: 3,
    Down: 5,
    Left: 4,
    Right: 6
} as const;


type Direction = typeof oDirection[keyof typeof oDirection];
function run(dir: Direction){}

walk(EDirection.Left);
run(oDirection.Right);

const obj2 = {a: '123', b: "hello", c: "world"}as const
type Key = typeof obj2[keyof typeof obj2]