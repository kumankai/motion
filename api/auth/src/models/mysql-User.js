const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'Users'
    }

    static get idColumn() {
        return 'userID'
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
        }
    }
}

module.exports = User;