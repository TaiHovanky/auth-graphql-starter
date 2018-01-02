const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth')

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req) {
                //request parameter is req object from express
                return AuthService.signup({ email, password, req });
                //need to return it because it is a promise
            }
        },
        logout: {
            type: UserType,
            resolve(parentValue, args, req) {
                const { user } = req;
                req.logout();
                return user;
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req) {
                return AuthService.login({ email, password, req });
            }
        }
    }
});

module.exports = mutation;