const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
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
  },

  Mutation: {
    addUser: async (parent, { name, password, email, isGM }) => {
      const user = await User.create({ name, password, email, isGM });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { name, password }) => {
      const user = await User.findOne({ name });

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

    addItem: async (parent, { productData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedProducts: productData } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('Please Login First!');
    },
    removeItem: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedProducts: { item: _id } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('Please Login First!');
    },
  }
};

  module.exports = resolvers;
 // removeUser: async (parent, { userId }) => {
    //   return User.findOneAndDelete({ _id: userId });
    // },