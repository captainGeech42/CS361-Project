class Users {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const stmt = `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ts DATETIME DEFAULT CURRENT_TIMESTAMP,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            admin BOOLEAN DEFAULT 0
        );`;

        return this.dao.exec(stmt);
    }

    // add user (name + email + hash)

    // get password (hash)

    // update password (hash)

    // make user admin

    // remove admin for user
}

module.exports = Users;