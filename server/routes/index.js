// module.exports = require("./Users");
// require("./Products");
var express = require("express");
var router = express.Router();
var { generateToken, sendToken } = require("../utils/token.utils");
var passport = require("passport");
var config = require("../config");
const jwt = require("jsonwebtoken");
require("../passport")();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// router.route("/auth/twitter/reverse").post(function (req, res) {
//   request.post(
//     {
//       url: "https://api.twitter.com/oauth/request_token",
//       oauth: {
//         oauth_callback: "http%3A%2F%2Flocalhost%3A3000%2Ftwitter-callback",
//         consumer_key: config.twitterAuth.consumerKey,
//         consumer_secret: config.twitterAuth.consumerSecret,
//       },
//     },
//     function (err, r, body) {
//       if (err) {
//         return res.send(500, { message: e.message });
//       }
//       var jsonStr =
//         '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
//       res.send(JSON.parse(jsonStr));
//     }
//   );
// });

// router.route("/auth/twitter").post(
//   (req, res, next) => {
//     request.post(
//       {
//         url: `https://api.twitter.com/oauth/access_token?oauth_verifier`,
//         oauth: {
//           consumer_key: config.twitterAuth.consumerKey,
//           consumer_secret: config.twitterAuth.consumerSecret,
//           token: req.query.oauth_token,
//         },
//         form: { oauth_verifier: req.query.oauth_verifier },
//       },
//       function (err, r, body) {
//         if (err) {
//           return res.send(500, { message: err.message });
//         }

//         const bodyString =
//           '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
//         const parsedBody = JSON.parse(bodyString);

//         req.body["oauth_token"] = parsedBody.oauth_token;
//         req.body["oauth_token_secret"] = parsedBody.oauth_token_secret;
//         req.body["user_id"] = parsedBody.user_id;

//         next();
//       }
//     );
//   },
//   passport.authenticate("twitter-token", { session: false }),
//   function (req, res, next) {
//     if (!req.user) {
//       return res.send(401, "User Not Authenticated");
//     }
//     req.auth = {
//       id: req.user.id,
//     };

//     return next();
//   },
//   generateToken,
//   sendToken
// );

router.route("/auth/facebook").post(
  passport.authenticate("facebook-token", { session: false }),
  function (req, res, next) {
    if (!req.user) {
      return res.send(401, "User Not Authenticated");
    }
    req.auth = {
      id: req.user.id,
    };

    next();
  },
  generateToken,
  sendToken
);

router.route("/auth/google").post(
  passport.authenticate("google-token", { session: false }),
  function (req, res, next) {
    if (!req.user) {
      return res.send(401, "User Not Authenticated");
    }
    req.auth = {
      id: req.user.id,
    };

    next();
  },
  generateToken,
  sendToken
);

const mongoose = require("mongoose");

router.get("/home", (req, res) => {
  res.json({ hi: "hi" });
});

router.get("/products", (req, res) => {
  try {
    mongoose.connection.db.collection("men_bottomwear", (err, coll) => {
      if (err) throw err;
      coll.find({}).toArray((err, data) => {
        if (err) throw err;
        res.status(200).json(data.slice(0, 45));
      });
    });
  } catch (err) {
    throw err;
  }
});

function jwtMiddleware(req, res, next) {
  const { access_token } = req.body;
  if (!access_token) {
    console.log("access_token not provided..");
    return res.status(401).json({ message: "access_token not provided" });
  } else {
    jwt.verify(access_token, "my-secret", { complete: true }, function (
      err,
      decoded
    ) {
      if (err) {
        /*
        err = {
          name: 'NotBeforeError',
          message: 'jwt not active',
          date: 2018-10-04T16:10:44.000Z
        }
      */
        return res.status(403).json(err);
        // throw err;
      }
      console.log("decoded = ", decoded);
    });
    next();
  }
}

function stripeMiddleware(req, res, next) {
  req.headers.Authorization = `Bearer ${process.env.STRIPE_SECRET_KEY}`;
  next();
}

router.post("/getintent", jwtMiddleware, stripeMiddleware, async (req, res) => {
  const { amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: "accept_a_payment" },
  });
  // console.log(paymentIntent);
  res.status(200).json(paymentIntent);
});

module.exports = router;
