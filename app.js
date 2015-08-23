var koa = require('koa');
var app = koa();
var router = require('koa-router')();
var logger = require('koa-logger');
var serve = require('koa-static');
var router = require('koa-router')();
 
// Logger
app.use(logger());
app.use(serve(process.cwd() + '/public'));


router.get('/', function *(next) {
  this.body = 'Hello World!';
});

app
  .use(router.routes())
  .use(router.allowedMethods());


if (!module.parent) {
  app.listen(1337);
  console.log('listening on port 1337');
}