var jwt = require("jsonwebtoken");

var createToken = function (auth) {
  return jwt.sign(
    {
      id: auth.id,
    },
    "my-secret",
    {
      expiresIn: 60 * 120,
    }
  );
};

module.exports = {
  generateToken: function (req, res, next) {
    req.token = createToken(req.auth);
    return next();
  },
  sendToken: function (req, res) {
    res.setHeader("x-auth-token", req.token);
    // res.cookie("jwt", req.token);
    return res.status(200).send(JSON.stringify(req.user));
  },
};

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmM2JjYmU5ZDI5NGMzMjc2NGRkMzU1MyIsImlhdCI6MTU5NzkyNzk2MiwiZXhwIjoxNTk3OTM1MTYyfQ.zmT8K4gbdxhiY3nllyBK7eHioE6BkiRWW0omH_RF9tQ
