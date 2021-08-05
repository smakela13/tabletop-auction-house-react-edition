const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  label: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  value: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Category = model('Category', categorySchema);

module.exports = Category;
