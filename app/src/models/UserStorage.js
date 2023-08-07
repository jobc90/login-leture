"use strict"

class UserStorage {
    static #users = {
        id: ["111", "222", "333"],
        password: ["1111", "2222", "3333"],
        name: ["부장", "팀장", "대리"],
    };

    static getUsers(...fields) {
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;