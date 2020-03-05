class Topics {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const stmt = `CREATE TABLE IF NOT EXISTS topics (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ts DATETIME DEFAULT CURRENT_TIMESTAMP,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            parent INTEGER,
            FOREIGN KEY(parent) REFERENCES topics(id)
        );`;

        return this.dao.exec(stmt);
    }

    // add topic

    // edit description

    // delete topic

    // get topic
}

module.exports = Topics;