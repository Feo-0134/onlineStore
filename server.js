const Koa = require('koa');
const app = new Koa();
require('dotenv').config()

app.use(async ctx => {
    ctx.body = 'Hello World';
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Listening on ' + (process.env.PORT || 3000))
});