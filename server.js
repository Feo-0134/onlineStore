const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router')
const router = new Router({ prefix: '/api' })
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger');
const cors = require('koa2-cors');
const serve = require('koa-static')
const path = require('path')

require('dotenv').config()

// db connection
const db = require('./mongodb')
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to DB ' + process.env.NODE_ENV)
})
const models = require('./models/purchaseRecord')
const purchaseRecord = models.purchaseRecord

var staticPath = './client/dist/'

router.use(bodyParser())

router.post('/purchase', async(ctx) => {
    var b = ctx.request.body
    console.log(b)
    try {
        var payload = new purchaseRecord({item:b.item, amount:b.amount, person:b.person})
        await payload.save()
        ctx.body = 'success'
    }catch(e){
        console.log(e)
        ctx.body = e
    }
})

app .use(cors({
        origin: function (ctx) {
            if (ctx.url === '/test') {
                return "*"; // 允许来自所有域名请求
            }
            return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods())

    app.listen(process.env.PORT || 3000, ()=>{
    console.log('Listening on ' + (process.env.PORT || 3000))
});