const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'Users';
    }

    static get idColumn() {
        return 'userID';
    }

    static async register(user){
        await User.query().insert({
            userID: user.userID,
            username: user.username,
            password: user.password
        });
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['userID', 'username'],

            properties: {
                userID: { type: 'string' },
                username: { type: 'string' },
                password: { type: 'string', minLength: 8 }
            }
        };
    }
}

module.exports = User;