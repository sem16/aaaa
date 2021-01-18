import cors from 'cors';
import express from 'express'
const whiteList = ['http://localhost:2222/','http://localhost:4200'];

const app = express();
// app.use(cors({
//     origin: function(origin,callback) {
//         if(whiteList.indexOf(origin) !== -1)
//             callback(null,true)
//         else
//         callback(new Error('not allowed by CORS'))
//     }
// }));

app.use(express.static('public',{
    setHeaders: (res,path,stat) => {
        if (path.endsWith('.wasm')) {
            res.set('Content-Type','application/wasm')
        }
    }
}));

app.listen(2222,() => {
    console.log('listening...');
});