const { AuthenticationError } = require('apollo-server-express');
const { User, Product } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    products: async () => {
      return Product.find().sort({ createdAt: -1 });
    },

    product: async (parent, { productId }) => {
      return Product.findOne({ _id: productId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, password, email }) => {
      const user = await User.create({ username, password, email });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No User with this name found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    addProduct: async (parent, { productName, price, stock, description }) => {
      return Product.create({ productName, price, stock, description });
    },
    addComment: async (parent, { productId, commentText }) => {
      return Product.findOneAndUpdate(
        { _id: productId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProduct: async (parent, { productId }) => {
      return Product.findOneAndDelete({ _id: productId });
    },
    removeComment: async (parent, { productId, commentId }) => {
      return Product.findOneAndUpdate(
        { _id: productId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  }
};

module.exports = resolvers;