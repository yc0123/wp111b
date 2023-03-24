import { app } from './myoak.js'

app.use(function (ctx) {
  ctx.body = `
  method=${ctx.request.method}
  url=${ctx.request.url}
  proto=${ctx.request.proto}
  headers=${JSON.stringify(Object.fromEntries(ctx.request.headers))}
  `;
})

console.log('server started at http://127.0.0.1:8000')
app.listen(8000)
