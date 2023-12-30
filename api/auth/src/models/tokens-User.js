const { Model } = require('objection');

class RefreshToken extends Model {
    static get tableName() {
        return 'RefreshTokens';
    }

    static get schemaName() {
        return 'Tokens';
    }

    static get idColumn() {
        return 'userID'
    }

    static async register(user){
        await RefreshToken.query().insert({
            userID: user.userID,
            RefreshToken: user.refreshToken
        });
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['userID', 'RefreshToken'],

            properties: {
                userID: { type: 'string' },
                RefreshToken: { type: 'string' }
            }
        }
    }
}

module.exports = RefreshToken;