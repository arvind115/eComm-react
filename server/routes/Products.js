const express = require("express");
const mongoose = require("mongoose");

const productsRouter = express.Router();

productsRouter.get("/products", (req, res) => {
  try {
    mongoose.connection.db.collection("men_bottomwear", (err, coll) => {
      if (err) throw err;
      coll.find({}).toArray((err, data) => {
        if (err) throw err;
        res.status(200).json(data.slice(0, 5));
      });
    });
  } catch (err) {
    throw err;
  }
});

module.exports = productsRouter;
