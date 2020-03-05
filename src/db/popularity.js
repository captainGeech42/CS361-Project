class Popularity {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const stmt = `CREATE TABLE IF NOT EXISTS popularity (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ts DATETIME DEFAULT CURRENT_TIMESTAMP,
            topic INTEGER NOT NULL,
            views INTEGER NOT NULL DEFAULT 1,
            FOREIGN KEY(topic) REFERENCES topics(id)
        );`;

        return this.dao.exec(stmt);
    }

    // add new topic

    // update rating
}

module.exports = Popularity;