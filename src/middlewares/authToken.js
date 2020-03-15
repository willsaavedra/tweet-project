const auth = require('../constants/auth');
module.exports = function (req, res, next) {
    const nativeToken = auth.token;
    const xAcessToken = req.headers['x-access-token'];
    console.log({require: "OK"});
    if (!xAcessToken || (xAcessToken !== nativeToken)) {
        res.status(401).send('<p>401 Unauthorized | Not Found Token </p>');
        return;
    }
    next();
}