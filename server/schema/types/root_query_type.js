const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //we want to return a user to the front end to indicate that the user is authenticated
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        //if user is logged in, there will be a req.User
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
