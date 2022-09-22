import express, {ErrorRequestHandler, Request, RequestHandler, Response} from 'express'
import passport from "passport"
import session from 'express-session';
import cookieParser from 'cookie-parser';
 
//express는 어떻게 구성되어 있을까? - 아래보면서 예시
// interface ExpressFunction() {
//     (): App;
// }

// interface Express extends ExpressFunction {
//     json: () => Middleware;
//     urlEncoded: ({ extended?: boolean}) => Middleware;
//     static: (path: string) => Middleware
// }


// declare global {
//     namespace Express {
//     export interface Response {
//         zerocho: "god"
//         }
//     }
// }

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/", express.static("./public"));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret: "SECERT"
}));
app.use(cookieParser())

type R = Express.Request

// app.use((err, req, res, next) => {
//     console.log(err.status)
// })

//미들웨어는 RequestHandler 타입이다
//namespace가 global(declare global)로 되어 있어 middleware 쓸 수 있음

//(alias) interface RequestHandler<P = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = qs.ParsedQs, Locals extends Record<string, any> = Record<string, any>>

const middleware: RequestHandler<{ paramType: string }, { message: string }, { bodyType: number }, { queryType: boolean }, { localType: unknown }> = (req, res, next) => {
    req.params.paramType;
    req.body.bodyType;
    req.query.queryType;
    res.locals.localType;
    res.json({
        message: "hello"
    })
    req.cookies
    req.session
    req.user

}


app.get("/", middleware);

//매개변수가 4개
const errorMiddleware:ErrorRequestHandler = (err: Error, req, res, next) => {
console.log(err.status);
}
app.use(errorMiddleware)

app.listen(8080, () => {

})