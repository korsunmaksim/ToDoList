const { Schema, model } = require("mongoose");

const schema = new Schema({
  todos: { type: String },
  owner: { type: String },
});

module.exports = model("Todo", schema);
