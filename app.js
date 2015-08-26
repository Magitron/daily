var koa = require('koa');
var app = koa();
var logger = require('koa-logger');
var serve = require('koa-static');
var router = require('koa-router')();
var views  = require('co-views');
 
// Logger
app.use(logger());
app.use(serve(process.cwd() + '/public'));


var render = views(process.cwd() + '/views', {
  map: {
    html: 'swig'
  }
});

router.get('/', function *(next) {
  this.body = yield render('home');
});

app
  .use(router.routes())
  .use(router.allowedMethods());


if (!module.parent) {
  app.listen(1337);
  console.log('listening on port 1337');
}