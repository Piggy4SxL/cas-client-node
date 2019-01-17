const casClient = require('http-cas-client/wrap/koa2');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./src/router/index');

new Koa()
	.use(bodyParser())
	.use(casClient({
		casServerUrlPrefix: 'http://localhost:9000/cas',
		serverName: 'http://127.0.0.1:8081'
	}))
	.use(router.routes())
	.listen(8081);