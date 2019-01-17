const Router = require('koa-router');
const { casServerUrlPrefix } = require('../../index');

const router = new Router();

router.get('/', ctx => {
	const {
		givenName
	} = ctx.principal.attributes;

	ctx.set(
		"Content-Type", "text/html;charset=UTF-8"
	)
	ctx.body = "<h1>您好，" + givenName + "!</h1>" +
		"<a href='http://localhost:9000/cas/logout'> 点此登出 </a>"
})

module.exports = router;